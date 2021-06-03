var createError = require("http-errors")
const bodyParser = require('body-parser');
var express = require("express");
const connectDB = require('./config/db');
var path = require("path");
const mongoose = require('mongoose');
var cookieParser = require("cookie-parser")
var logger = require("morgan")

// Define routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var authUsersRouter = require('./routes/auth_users');
var authRouter = require('./routes/auth');
var articleRouter = require("./routes/article");
var generalRouter = require("./routes/generalData");

var app = express();
connectDB();


// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")))

// app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/auth_users", authUsersRouter);
app.use("/api/auth", authRouter);
app.use("/articles", articleRouter);
app.use("/general-test-data", generalRouter);



// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    });
}


// const mongoPwd = "MG841752!";
// const dbName = "testDB";
// const mongoConString = `mongodb+srv://testerDBuser:${mongoPwd}@cluster0.nfwjm.mongodb.net/${dbName}`;
// mongoose.connect(mongoConString, { useNewUrlParser: true, useUnifiedTopology: true })
//     .catch(err => console.log(`Error in connection or no internet... The error is: ${err}`));


// ----------------------------------- AmbientTemp -------------------
const AmbientTempSchema = {
    _id: Number,
    temp: Number
};
ambCollectionName = "first_prep_ambient_temp";

const AmbientTemp = mongoose.model("AmbientTemp", AmbientTempSchema, ambCollectionName);

app.route("/ambient-temp")

.get(function(req, res) {
    AmbientTemp.find(function(err, foundAmbientTemps) {
        if (!err) {
            res.send(foundAmbientTemps);
        } else {
            res.send("The error is: " + err);
        }
    });
});

app.route("/ambient-temp/findbyid/:collectionId")
    
    .get(function (req, res) {
        AmbientTemp.findById(req.params.collectionId, function(err, foundAmbientTemps) {
            if (!err) {
                res.send(foundAmbientTemps);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- CurrentCons -------------------
const CurrentConsSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
CurrentConsCollectionName = "first_prep_current_consumption";

const CurrentCons = mongoose.model("CurrentCons", CurrentConsSchema, CurrentConsCollectionName);

app.route("/current-cons")

.get(function(req, res) {
    CurrentCons.find(function(err, foundCurrentCons) {
        if (!err) {
            res.send(foundCurrentCons);
        } else {
            res.send("The error is: " + err);
        }
    });
});

app.route("/current-cons/findbyid/:collectionId")
    
    .get(function (req, res) {
        CurrentCons.findById(req.params.collectionId, function(err, foundCurrentCons) {
            if (!err) {
                res.send(foundCurrentCons);
            } else {
                res.send("The error is: " + err);
            }
        });
    });



// ----------------------------------- first_prep_excel_RH_Data -------------------

const FacturDataSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
FacturDataCollectionName = "first_prep_excel_RH_Data";

const FacturData = mongoose.model("FacturData", FacturDataSchema, FacturDataCollectionName);

app.route("/factur-data/findbyid/:collectionId")

    .get(function(req, res) {
        FacturData.findById(req.params.collectionId, function(err, foundFacturData) {
            if (!err) {
                res.send(foundFacturData);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- first_prep_gui_textbx -------------------
//-------------------------------------------------------------------------------------------------------------
const GuiDataSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
GuiDataCollectionName = "first_prep_gui_textbx";

const GuiData = mongoose.model("GuiData", GuiDataSchema, GuiDataCollectionName);

app.route("/gui-data/findbyid/:collectionId")

    .get(function(req, res) {
        GuiData.findById(req.params.collectionId, function(err, foundGuiData) {
            if (!err) {
                res.send(foundGuiData);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- first_prep_led_status -------------------

const LedStatSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
LedStatCollectionName = "first_prep_led_status";

const LedStat = mongoose.model("LedStat", LedStatSchema, LedStatCollectionName);

app.route("/led-status/findbyid/:collectionId")

    .get(function(req, res) {
        LedStat.findById(req.params.collectionId, function(err, foundLedStat) {
            if (!err) {
                res.send(foundLedStat);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- first_prep_pic_version -------------------

const PicVersionSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
PicVersionCollectionName = "first_prep_pic_version";

const PicVersion = mongoose.model("PicVersion", PicVersionSchema, PicVersionCollectionName);

app.route("/pic-version/findbyid/:collectionId")

    .get(function(req, res) {
        PicVersion.findById(req.params.collectionId, function(err, foundPicVersion) {
            if (!err) {
                res.send(foundPicVersion);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- first_prep_ping_stat -----------------------------

const PingStatusSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
PingStatusCollectionName = "first_prep_ping_stat";

const PingStatus = mongoose.model("PingStatus", PingStatusSchema, PingStatusCollectionName);

app.route("/ping-status/findbyid/:collectionId")

    .get(function(req, res) {
        PingStatus.findById(req.params.collectionId, function(err, foundPingStatus) {
            if (!err) {
                res.send(foundPingStatus);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- first_prep_reboot_time -------------------

const RebootTimeSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
RebootTimeCollectionName = "first_prep_reboot_time";

const RebootTime = mongoose.model("RebootTime", RebootTimeSchema, RebootTimeCollectionName);

app.route("/reboot-time/findbyid/:collectionId")

    .get(function(req, res) {
        RebootTime.findById(req.params.collectionId, function(err, foundRebootTime) {
            if (!err) {
                res.send(foundRebootTime);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- first_prep_status -------------------

const FirstPrepStatusSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
FirstPrepStatusCollectionName = "first_prep_status";

const FirstPrepStatus = mongoose.model("FirstPrepStatus", FirstPrepStatusSchema, FirstPrepStatusCollectionName);

app.route("/first-prep-stat/findbyid/:collectionId")

    .get(function(req, res) {
        FirstPrepStatus.findById(req.params.collectionId, function(err, foundFirstPrepStatus) {
            if (!err) {
                res.send(foundFirstPrepStatus);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- first_prep_temp -------------------

const TempSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
TempCollectionName = "first_prep_temp";

const Temp = mongoose.model("Temp", TempSchema, TempCollectionName);

app.route("/temp/findbyid/:collectionId")

    .get(function(req, res) {
        Temp.findById(req.params.collectionId, function(err, foundTemp) {
            if (!err) {
                res.send(foundTemp);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- first_prep_temp_changes -------------------

const TempChangesSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
TempChangesCollectionName = "first_prep_temp_changes";

const TempChanges = mongoose.model("TempChanges", TempChangesSchema, TempChangesCollectionName);

app.route("/temp-changes/findbyid/:collectionId")

    .get(function(req, res) {
        TempChanges.findById(req.params.collectionId, function(err, foundTempChanges) {
            if (!err) {
                res.send(foundTempChanges);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- imu_gps_status -------------------

const ImuGpsSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
ImuGpsCollectionName = "imu_gps_status";

const ImuGps = mongoose.model("ImuGps", ImuGpsSchema, ImuGpsCollectionName);

app.route("/imugps/findbyid/:collectionId")

    .get(function(req, res) {
        ImuGps.findById(req.params.collectionId, function(err, foundImuGps) {
            if (!err) {
                res.send(foundImuGps);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- tcxo_cal ---------------------------------

const TcxoCalSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
TcxoCalCollectionName = "tcxo_cal";

const TcxoCal = mongoose.model("TcxoCal", TcxoCalSchema, TcxoCalCollectionName);

app.route("/tcxo-cal/findbyid/:collectionId")

    .get(function(req, res) {
        TcxoCal.findById(req.params.collectionId, function(err, foundTcxoCal) {
            if (!err) {
                res.send(foundTcxoCal);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- p1db_results ---------------------------------

const P1dbResultsSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
P1dbResultsCollectionName = "p1db_results";

const P1dbResults = mongoose.model("P1dbResults", P1dbResultsSchema, P1dbResultsCollectionName);

app.route("/p1db-results/findbyid/:collectionId")

    .get(function(req, res) {
        P1dbResults.findById(req.params.collectionId, function(err, foundP1dbResults) {
            if (!err) {
                res.send(foundP1dbResults);
            } else {
                res.send("The error is: " + err);
            }
        });
    });


// ------------------------------- p1db_pwr_results -----------------------------

const P1dbPwrResultsSchema = {
    _id: Number,
    test_id: Number,
    frequency: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
P1dbPwrResultsCollectionName = "p1db_pwr_results";

const P1dbPwrResults = mongoose.model("P1dbPwrResults", P1dbPwrResultsSchema, P1dbPwrResultsCollectionName);

app.route("/p1db-pwr-results/findbyid/:collectionId")

    .get(function (req, res) {
        
        P1dbPwrResults.find({test_id: req.params.collectionId}, function(err, foundP1dbPwrResults) {
            if (!err) {
                res.send(foundP1dbPwrResults);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

app.route("/p1db-pwr-results/findbyid/:collectionId/frequency/:freq")

    .get(function (req, res) {
        // console.log(`colId is ${req.params.collectionId} freq is ${req.params.freq}`)
        P1dbPwrResults.find({test_id: req.params.collectionId, frequency: req.params.freq}, function(err, foundP1dbPwrResults) {
            if (!err) {
                res.send(foundP1dbPwrResults);
            } else {
                res.send("The error is: " + err);
            }
        });
    });


// ----------------------------------- full_link_DL_toTerminal -------------------

const FullLinkDLSchema = {
    _id: Number,
    test_id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
FullLinkDLCollectionName = "full_link_DL_toTerminal";

const FullLinkDL = mongoose.model("FullLinkDL", FullLinkDLSchema, FullLinkDLCollectionName);

app.route("/full-link-dl/findbyid/:collectionId")

    .get(function(req, res) {
        FullLinkDL.findById(req.params.collectionId, function(err, foundFullLinkDL) {
            if (!err) {
                res.send(foundFullLinkDL);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

app.route("/full-link-dl/findby_testid/:testId")

    .get(function (req, res) {
       
        FullLinkDL.find({test_id: req.params.testId}, function(err, foundLinkDL) {
            if (!err) {
                res.send(foundLinkDL);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- full_link_UL_toHub ----------------------

const FullLinkULSchema = {
    _id: Number,
    test_id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
FullLinkULCollectionName = "full_link_UL_toHub";

const FullLinkUL = mongoose.model("FullLinkUL", FullLinkULSchema, FullLinkULCollectionName);

app.route("/full-link-ul/findbyid/:collectionId")

    .get(function(req, res) {
        FullLinkUL.findById(req.params.collectionId, function(err, foundFullLinkUL) {
            if (!err) {
                console.log(foundFullLinkUL);
                res.send(foundFullLinkUL);
            } else {
                res.send("The error is: " + err);
            }
        });
    });


app.route("/full-link-ul/findby_testid/:testId")

    .get(function (req, res) {
       
        FullLinkUL.find({test_id: req.params.testId}, function(err, foundLinkUL) {
            if (!err) {
                res.send(foundLinkUL);
            } else {
                res.send("The error is: " + err);
            }
        });
    });


// ----------------------------------- full_link_cross_poll -------------------

const FLcrossPollSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
FLcrossPollCollectionName = "full_link_cross_poll";

const FLcrossPoll = mongoose.model("FLcrossPoll", FLcrossPollSchema, FLcrossPollCollectionName);

app.route("/fl-cross-poll/findbyid/:collectionId")

    .get(function(req, res) {
        FLcrossPoll.findById(req.params.collectionId, function(err, foundFLcrossPoll) {
            if (!err) {
                res.send(foundFLcrossPoll);
            } else {
                res.send("The error is: " + err);
            }
        });
    });

// ----------------------------------- full_link_general -------------------

const FullLinkGeneralSchema = {
    _id: Number,
    start_time: Date,
    temp: Number,
    end_time: Date
};
FullLinkGeneralCollectionName = "full_link_general";

const FullLinkGeneral = mongoose.model("FullLinkGeneral", FullLinkGeneralSchema, FullLinkGeneralCollectionName);

app.route("/full-link-general/findbyid/:collectionId")

    .get(function(req, res) {
        FullLinkGeneral.findById(req.params.collectionId, function(err, foundFullLinkGeneral) {
            if (!err) {
                res.send(foundFullLinkGeneral);
            } else {
                res.send("The error is: " + err);
            }
        });
    });




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
