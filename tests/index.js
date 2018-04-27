/**
 * Copyright 2015 Peter Andreas Moelgaard. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

    var DetectLanguage = require('../index');
    var detectLanguage = new DetectLanguage({
        key: process.env.DETECTLANGUAGE_API_KEY,
        ssl: true
    });

    var dataSimple = "I am a Teapot and a Submarine";
    detectLanguage.detect(dataSimple, function(error, result) {
        console.log(JSON.stringify(result));
    });

    var dataBulk = [
        "I am a Teapot and a Submarine",
        "Soy una tetera y un submarino",
        "Jeg er en tekande og en ubåd"
    ]
    detectLanguage.detect(dataBulk, function(error, result) {
        console.log(JSON.stringify(result));
    });

    detectLanguage.languages(function(error, result) {
        console.log(JSON.stringify(result));
    });

    detectLanguage.status(function(error, result) {
        console.log(JSON.stringify(result));
    });
