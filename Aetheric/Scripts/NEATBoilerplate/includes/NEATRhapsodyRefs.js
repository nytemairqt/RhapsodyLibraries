/*
    Copyright 2023, 2024, 2025 iamlamprey

    This file is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This file is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with This file. If not, see <http://www.gnu.org/licenses/>.
*/

// Rhapsody UI Elements

const RHAPSbtnUnload = Content.getComponent("btnUnload");
const RHAPSbtnSettings = Content.getComponent("btnSettings");
const RHAPSbtnMasterGain = Content.getComponent("knbMasterGain");
const RHAPSbtnMasterPan = Content.getComponent("knbMasterPan");
const RHAPSbtnPreset0 = Content.getComponent("btnPreset0");
const RHAPSbtnPreset1 = Content.getComponent("btnPreset1");
const RHAPSbtnPresetSave = Content.getComponent("btnPresetSave");
const RHAPSbtnTitle = Content.getComponent("btnTitle");
const RHAPSbtnLogo = Content.getComponent("btnLogo");

// Hide Rhapsody Button
RHAPSbtnLogo.set("visible", false);