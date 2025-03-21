/*
    Copyright 2021, 2022, 2023 David Healey

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

namespace Ui
{
	inline function createTemplate(name)
	{
		local a = [0, 0, 1000, 710];

		createContainer(a);
		createHeader(name);
		createBody();
		createStatusBar();
		createFooter();
		createSettingsPanel();
		createPresetPanel();
		createZoomPanel();
	}
	
	inline function createContainer(a)
	{
		Content.addPanel("pnlContainer", 0, 0);
		Content.setPropertiesFromJSON("pnlContainer", {
			"x": a[0], "y": a[1], "width": a[2], "height": a[3],
			"text": "",
			"bgColour": 0x0,
			"itemColour": 0xff1d1d21,
			"itemColour2": 0xff1d1d21,
			"textColour": 0x0,
		    "borderSize": 0,
		    "borderRadius": 0
		});
	}

	inline function createAdminPanel()
	{
		Content.addPanel("pnlAdmin", 0, 0);
		Content.setPropertiesFromJSON("pnlAdmin", {
			"x": 0, "y": 0, "width": 300, "height": 205,
			"parentComponent": "pnlContainer",
		    "visible": false
		});

		Content.addKnob("knbPatch", 0, 0);
		Content.setPropertiesFromJSON("knbPatch", {
			"x": 0, "y": 0, "width": 128, "height": 48,
			"parentComponent": "pnlAdmin",
			"text": "Patch",
			"min": -1.0,
			"max": 50.0,
			"stepSize": 1.0,
			"middlePosition": 25.0,
			"enableMidiLearn": false
		});
	}

	inline function createHeader(name)
	{
		Content.addPanel("pnlHeader", 0, 0);
		Content.setPropertiesFromJSON("pnlHeader", {
			"x": 0, "y": 0, "width": 1000, "height": 60,
			"parentComponent": "pnlContainer",
			"bgColour": 0x0,
			"itemColour": 0x0,
			"itemColour2": 0x0,
			"textColour": 0x0,
			"borderSize": 0,
			"borderRadius": 0
		});
		
		Content.addButton("btnTitle", 0, 0);
		Content.setPropertiesFromJSON("btnTitle", {
			"x": 20, "y": 0, "width": 200, "height": 60,
			"parentComponent": "pnlHeader",
			"saveInPreset": false,
			"text": name,
			"tooltip": "",
			"bgColour": 0x0,
			"itemColour": 0x0,
			"itemColour2": 0x0,
			"textColour": 0xffe2e2e2,
			"isMomentary": true,
			"enableMidiLearn": false,
		});	

		Content.addButton("btnSettings", 0, 0);
		Content.setPropertiesFromJSON("btnSettings", {
			"x": 576 , "y": 21, "width": 18, "height": 18,
		    "parentComponent": "pnlHeader",
		    "text": "settings",
		    "saveInPreset": false,
		    "bgColour": 0x0,
		    "itemColour": 0xffcfcfcf,
		    "itemColour2": 0xffe6e4ff,
		    "textColour": 0x0,
		    "enableMidiLearn": false
		});
		
		Content.addButton("btnUnload", 0, 0);
		Content.setPropertiesFromJSON("btnUnload", {
			"x": 606 , "y": 21, "width": 18, "height": 18,
		    "parentComponent": "pnlHeader",
		    "text": "widgets",
		    "saveInPreset": false,
		    "bgColour": 0x0,
		    "itemColour": 0xffcfcfcf,
		    "itemColour2": 0xffe6e4ff,
		    "textColour": 0x0,
		    "enableMidiLearn": false,
		    "isMomentary": true
		});

		Content.addPanel("pnlPresetDisplay", 0, 0);
		Content.setPropertiesFromJSON("pnlPresetDisplay", {
			"x": 635, "y": 12, "width": 350, "height": 36,
		    "parentComponent": "pnlHeader",
		    "text": "",
		    "bgColour": 0xff161619,
		    "itemColour": 0xff2e2e33,
		    "itemColour2": 0x0,
		    "textColour": 0x0,
		    "borderSize": 0,
		    "borderRadius": 5
		});
		
		Content.addButton("btnPresetBrowser", 0, 0);
		Content.setPropertiesFromJSON("btnPresetBrowser", {
			"x": 5, "y": 0, "width": 273, "height": 36,
		    "parentComponent": "pnlPresetDisplay",
		    "text": "",
		    "bgColour": 0x0,
		    "itemColour": 0x0,
		    "itemColour2": 0x0,
		    "textColour": Colours.white,
		    "saveInPreset": false,
		    "enableMidiLearn": false
		});
				
		Content.addButton("btnPreset0", 0, 0);
		Content.setPropertiesFromJSON("btnPreset0", {
			"x": 286, "y": 11, "width": 9, "height": 14,
		    "parentComponent": "pnlPresetDisplay",
		    "text": "arrowLeft",
		    "saveInPreset": false,
		    "bgColour": 0x0,
		    "itemColour": 0xffe0e0e0,
		    "itemColour2": 0xffc6c5c5,
		    "textColour": 0x0,
		    "isMomentary": true,
		    "enableMidiLearn": false
		});
		
		Content.addButton("btnPreset1", 0, 0);
		Content.setPropertiesFromJSON("btnPreset1", {
			"x": 304, "y": 11, "width": 9, "height": 14,
		    "parentComponent": "pnlPresetDisplay",
		    "text": "arrowRight",
		    "saveInPreset": false,
		    "bgColour": 0x0,
		    "itemColour": 0xffe0e0e0,
		    "itemColour2": 0xffc6c5c5,
		    "textColour": 0x0,
		    "isMomentary": true,
		    "enableMidiLearn": false
		});
		
		Content.addButton("btnPresetSave", 0, 0);
		Content.setPropertiesFromJSON("btnPresetSave", {
			"x": 326, "y": 11, "width": 14, "height": 14,
		    "parentComponent": "pnlPresetDisplay",
		    "text": "save",
		    "saveInPreset": false,
		    "bgColour": 0x0,
		    "itemColour": 0xffe0e0e0,
		    "itemColour2": 0xffc6c5c5,
		    "textColour": 0x0,
		    "isMomentary": true,
		    "enableMidiLearn": false
		});
	}
	
	inline function createBody()
	{
		Content.addPanel("pnlBody", 0, 0);
		Content.setPropertiesFromJSON("pnlBody", {
			"x": 5, "y": 60, "width": 990, "height": 565,
			"parentComponent": "pnlContainer",
			"text": "",
			"bgColour": 0x0,
			"itemColour": 0xff2f2f34,
			"itemColour2": 0xff2f2f34,
			"textColour": 0x0,
			"borderSize": 0,
			"borderRadius": 12
		});
	}
	
	inline function createZoomPanel()
	{
		Content.addPanel("pnlZoom", 0, 0);
		Content.setPropertiesFromJSON("pnlZoom", {
			"x": 990, "y": 700, "width": 10, "height": 10,
			"parentComponent": "pnlContainer",
			"allowCallbacks": "Clicks, Hover & Dragging",
			"text": "Resize Interface"
		});
	}
	
	inline function createStatusBar()
	{
		local masterChainId = Synth.getIdList("Container")[0];

		Content.addPanel("pnlStatusBar", 0, 0);
		Content.setPropertiesFromJSON("pnlStatusBar", {
			"x": 5, "y": 585, "width": 990, "height": 39,
			"parentComponent": "pnlContainer",
			"text": "",
			"bgColour": 0x0,
			"itemColour": 0xff2f2f34,
			"itemColour2": 0xfff0e8ce,
			"textColour": 0xffe2e3f3,
			"borderSize": 0,
			"borderRadius": 0
		});
		
		Content.addFloatingTile("fltStats", 0, 0);
		Content.setPropertiesFromJSON("fltStats", {
			"x": 15, "y": 10, "width": 225, "height": 20,
		    "parentComponent": "pnlStatusBar",
		    "bgColour": 0x0,
		    "itemColour": 0x0,
		    "itemColour2": 0x0,
		    "itemColour3": 0x0,
		    "textColour": 0x6cffffff,
		    "ContentType": "PerformanceLabel",
		    "updateAfterInit": true,
		    "Font": "medium",
		    "FontSize": 14
		});
		
		Content.addButton("btnLogo", 0, 0);
		Content.setPropertiesFromJSON("btnLogo", {
			"x": 437.50, "y": 12, "width": 125, "height": 15,
		    "parentComponent": "pnlStatusBar",
		    "text": "logo",
		    "tooltip": "Visit the developer's website.",
		    "saveInPreset": false,
		    "bgColour": 0x0,
		    "itemColour": 0xffe2e3f3,
		    "itemColour2": 0xffd0d1df,
		    "textColour": 0x0,
		    "isMomentary": true,
		    "enableMidiLearn": false
		});

		Content.addFloatingTile("fltPeakMeter", 0, 0);
		Content.setPropertiesFromJSON("fltPeakMeter", {
			"x": 730, "y": 13, "width": 100, "height": 16,
			"parentComponent": "pnlStatusBar",
			"saveInPreset": false,
			"bgColour": 0x0,
			"itemColour": 0xff212125,
			"itemColour2": 0xff5a5f6c,
			"itemColour3": 0x0,
			"textColour": 0x0,
			"ContentType": "MatrixPeakMeter",
		    "Data": '{\n  \"ProcessorId\": \"' + masterChainId + '\",\n  \"Index\": -1,\n  \"FollowWorkspace\": false,\n  \"SegmentLedSize\": 0.0,\n  \"UpDecayTime\": 200.0,\n  \"DownDecayTime\": 500.0,\n  \"UseSourceChannels\": true,\n  \"SkewFactor\": 0.3,\n  \"PaddingSize\": 0.5,\n  \"ShowMaxPeak\": 1.0,\n  \"ChannelIndexes\": [\n    0,\n    1,\n ]\n}'
		});

		Content.addKnob("knbMasterGain", 0, 0);
		Content.setPropertiesFromJSON("knbMasterGain", {
			"x": 730, "y": 13, "width": 100, "height": 16,
		    "parentComponent": "pnlStatusBar",
		    "text": "Gain",
		    "tooltip": "Master volume.",
		    "saveInPreset": true,
		    "isPluginParameter": true,
		    "pluginParameterName": "Master Volume",
		    "processorId": "masterGain",
		    "parameterId": "Gain",
		    "defaultValue": -6.0,
		    "bgColour": 0x0,
		    "itemColour": 0xff15141a,
		    "itemColour2": 0xffd7d0bc,
		    "textColour": Colours.white,
		    "mode": "Decibel",
		    "style": "Horizontal",
		    "dragDirection": "Horizontal",
		    "showValuePopup": "Below",
		    "showTextBox": false		    
		});
		
		Content.addKnob("knbMasterPan", 0, 0);
		Content.setPropertiesFromJSON("knbMasterPan", {
			"x": 890, "y": 13, "width": 80, "height": 16,
		    "parentComponent": "pnlStatusBar",
		    "text": "Master Pan",
		    "tooltip": "Master pan.",
		    "saveInPreset": true,
		    "isPluginParameter": true,
		    "pluginParameterName": "Master Pan",
		    "bgColour": 0xff212125,
		    "itemColour": 0xff15141a,
		    "itemColour2": 0xffd7d0bc,
		    "textColour": Colours.white,
		    "processorId": "masterGain",
		    "parameterId": "Balance",
		    "mode": "Pan",
		    "style": "Horizontal",
		    "dragDirection": "Horizontal",
		    "showValuePopup": "Below",
		    "showTextBox": false		    
		});
	}
	
	inline function createFooter()
	{
		Content.addPanel("pnlFooter", 0, 0);
		Content.setPropertiesFromJSON("pnlFooter", {
			"x": 0, "y": 625, "width": 1000, "height": 85,
			"parentComponent": "pnlContainer",
			"text": "",
			"bgColour": 0x0,
			"itemColour": 0x0,
			"itemColour2": 0x0,
			"textColour": 0x0,
			"borderSize": 0,
			"borderRadius": 0
		});

		Content.addButton("btnPanic", 0, 0);
		Content.setPropertiesFromJSON("btnPanic", {
			"x": 27, "y": 35, "width": 18, "height": 18,
			"parentComponent": "pnlFooter",
			"text": "warningCircle",
			"tooltip": "MIDI Panic - All notes off.",
			"saveInPreset": false,
			"bgColour": 0x55ffffff,
			"itemColour": 0x66909090,
			"itemColour2": 0xfb747474,
			"textColour": Colours.white,
			"isMomentary": true,
			"enableMidiLearn": false
		});
		
		Content.addFloatingTile("fltKeyboard", 0, 0);
		Content.setPropertiesFromJSON("fltKeyboard", {
			"x": 72.5, "y": 10, "width": 855, "height": 66,
		    "parentComponent": "pnlFooter",
		    "bgColour": 0xff646464,
		    "ContentType": "Keyboard",
	        "Data": "{\n  \"KeyWidth\": 15.0,\n  \"DisplayOctaveNumber\": false,\n  \"LowKey\": 12,\n  \"HiKey\": 108,\n  \"CustomGraphics\": false,\n  \"DefaultAppearance\": true,\n  \"BlackKeyRatio\": 0.699999988079071,\n  \"ToggleMode\": false,\n  \"MidiChannel\": 1,\n  \"UseVectorGraphics\": true,\n  \"UseFlatStyle\": false,\n  \"MPEKeyboard\": false,\n  \"MPEStartChannel\": 2,\n  \"MPEEndChannel\": 16\n}"
		});
	}

	inline function createToolTipPanel()
	{
		Content.addPanel("pnlTooltip", 0, 0);
		Content.setPropertiesFromJSON("pnlTooltip", {
			"x": 0, "y": 43, "width": 1000, "height": 42,
			"parentComponent": "pnlFooter",
			"text": "",
			"saveInPreset": false,
			"bgColour": 0x78000000,
			"itemColour": 0x0,
			"itemColour2": 0x0,
			"textColour": 0xc4ffffff,
			"borderSize": 0.0,
			"borderRadius": 0.0
		});
	}

	inline function createPresetPanel()
	{
		Content.addPanel("pnlPresetBrowserContainer", 0, 0);
		Content.setPropertiesFromJSON("pnlPresetBrowserContainer", {
			"x": 0, "y": 0, "width": 1000, "height": 710,
		    "parentComponent": "pnlContainer",
		    "text": "",
		    "visible": false,
		    "bgColour": 0x78000000,
		    "itemColour": 0x0,
		    "itemColour2": 0x0,
		    "textColour": 0x0,
		    "borderSize": 0.0,
		    "borderRadius": 0.0,
		    "allowCallbacks": "Clicks Only"
		});	

		Content.addPanel("pnlPresetBrowser", 0, 0);
		Content.setPropertiesFromJSON("pnlPresetBrowser", {
			"x": 5, "y": 60, "width": 990, "height": 565,
		    "parentComponent": "pnlPresetBrowserContainer",
		    "text": "",
			"bgColour": 0xff2f2f34,
		    "itemColour": 0x0,
		    "itemColour2": 0x0,
		    "textColour": 0x0,
		    "borderSize": 0.0,
		    "borderRadius": 12.0,
		});
		
		Content.addFloatingTile("fltPresetBrowser", 0, 0);
		Content.setPropertiesFromJSON("fltPresetBrowser", {
			"x": 5, "y": 10, "width": 980, "height": 550,
		    "parentComponent": "pnlPresetBrowser",
		    "bgColour": 0x0,
			"itemColour": 0xffbebed4,
			"itemColour2": 0x0,
			"itemColour3": 0x0,
			"textColour": 0xffffffff,
		    "Font": "bold",
		    "FontSize": 14,
		    "ContentType": "PresetBrowser",
			"Data": "{\n  \"ShowSaveButton\": true,\n  \"ShowExpansionsAsColumn\": false,\n  \"ShowFolderButton\": false,\n  \"ShowNotes\": true,\n  \"ShowEditButtons\": true,\n  \"EditButtonOffset\": 15,\n  \"ShowAddButton\": true,\n  \"ShowRenameButton\": true,\n  \"ShowDeleteButton\": true,\n  \"ShowFavoriteIcon\": true,\n  \"ButtonsInsideBorder\": true,\n  \"NumColumns\": 3,\n  \"ColumnWidthRatio\": [\n    0.3333333333333333,\n    0.3333333333333333,\n    0.3333333333333333\n  ],\n  \"ListAreaOffset\": [\n    0,\n    5,\n    0,\n    -15\n  ],\n  \"ColumnRowPadding\": [\n    65,\n    15,\n    15,\n    15\n  ],\n  \"SearchBarBounds\": [\n    230,\n    0,\n    506,\n    36\n  ],\n  \"SaveButtonBounds\": [\n    740,\n    0,\n    191,\n    36\n  ],\n  \"FavoriteButtonBounds\": [\n    5,\n    0,\n    241,\n    36\n  ]\n}"
		});
		
		Content.addButton("btnPresetBrowserClose", 0, 0);
		Content.setPropertiesFromJSON("btnPresetBrowserClose", {
			"x": 940, "y": 10, "width": 40, "height": 36,
		    "parentComponent": "pnlPresetBrowser",
		    "text": "x",
		    "tooltip": "Close the preset browser.",
		    "saveInPreset": false,
		    "bgColour": 0xff161619,
		    "itemColour": 0xffcfcfcf,
		    "itemColour2": 0xffffffff,
		    "textColour": 0xffffffff,
		    "enableMidiLearn": false
		});

		Content.addPanel("pnlPresetNotesBlocker", 0, 0);
		Content.setPropertiesFromJSON("pnlPresetNotesBlocker", {
			"x": 10, "y": 55, "width": 970, "height": 36,
			"parentComponent": "pnlPresetBrowser",
			"text": "",
			"bgColour": 0xff2f2f34,
			"itemColour": 0x0,
			"itemColour2": 0x0,
			"textColour": 0xffcacaca,
			"borderSize": 0,
			"borderRadius": 0
		});
	}

	inline function createSettingsPanel()
	{
		Content.addPanel("pnlSettingsContainer", 0, 0);
		Content.setPropertiesFromJSON("pnlSettingsContainer", {
			"x": 0, "y": 0, "width": 1000, "height": 710,
		    "parentComponent": "pnlContainer",
		    "text": "",
		    "visible": false,
		    "bgColour": 0x78000000,
		    "itemColour": 0x0,
		    "itemColour2": 0x0,
		    "textColour": 0x0,
		    "borderSize": 0,
		    "borderRadius": 0,
		    "allowCallbacks": "Clicks Only"
		});		

		Content.addPanel("pnlSettings", 0, 0);
		Content.setPropertiesFromJSON("pnlSettings", {
			"x": 130, "y": 100, "width": 740, "height": 460,
		    "parentComponent": "pnlSettingsContainer",
		    "text": "SETTINGS",
			"bgColour": 0xff2f2f34,
		    "itemColour": 0xff1d1d21,
		    "itemColour2": 0x0,
		    "textColour": 0xffdddddd,
		    "borderSize": 0,
		    "borderRadius": 12
		});
		
		Content.addPanel("pnlSettingsMenu", 0, 0);
		Content.setPropertiesFromJSON("pnlSettingsMenu", {
			"x": 10, "y": 75, "width": 155, "height": 250,
		    "parentComponent": "pnlSettings",
		    "text": "",
			"bgColour": 0xff2a292e,
		    "itemColour": 0xfff8d799,
		    "itemColour2": 0x0,
		    "textColour": 0xffe9e9e9,
		    "borderSize": 0,
		    "borderRadius": 5,
		    "allowCallbacks": "All Callbacks"
		});
	
		local text = ["ENGINE", "AUDIO", "MIDI", "AUTOMATION", "MPE"];

		for (i = 0; i < text.length; i++)
		{
			Content.addPanel("pnlSettingsTab" + i, 0, 0);
			Content.setPropertiesFromJSON("pnlSettingsTab" + i, {
			    "x": 175, "y": 30, "width": 565, "height": 420,
			    "parentComponent": "pnlSettings",
			    "text": text[i],
			    "visible": i < 1,
			    "bgColour": 0xff1d1d21,
				"itemColour": 0xff161619,
				"itemColour2": 0x0,
				"textColour": 0xffdddddd,
				"borderSize": 0,
				"borderRadius": 12
			});
		}
		
		Content.addFloatingTile("fltEngineSettings", 0, 0);
		Content.setPropertiesFromJSON("fltEngineSettings", {
		    "x": -25, "y": 0, "width": 400, "height": 420,
		    "parentComponent": "pnlSettingsTab0",
		    "bgColour": 0x0,
			"itemColour": 0x0,
			"itemColour2": 0x0,
			"itemColour3": 0x0,
			"textColour": 0xffe2e2e2,
		    "ContentType": "CustomSettings",
			"Data": "{\n  \"Driver\": false,\n  \"Device\": false,\n  \"Output\": false,\n  \"BufferSize\": false,\n  \"SampleRate\": false,\n  \"GlobalBPM\": true,\n  \"StreamingMode\": true,\n  \"ScaleFactor\": false,\n  \"VoiceAmountMultiplier\": true,\n  \"ClearMidiCC\": false,\n  \"SampleLocation\": false,\n  \"DebugMode\": false,\n  \"UseOpenGL\": true,\n  \"ScaleFactorList\": [\n    0.5,\n    0.75,\n    1.0,\n    1.25,\n    1.5,\n    2.0,\n    2.5,\n    3.0,\n    4.0\n  ]\n}",
		    "Font": "medium",
		    "FontSize": 16.0
		});
		
		Content.addButton("btnLazyLoad", 0, 0);
		Content.setPropertiesFromJSON("btnLazyLoad", {
		    "x": 150, "y": 175, "width": 40, "height": 20,
		    "parentComponent": "pnlSettingsTab0",
		    "text": "",
		    "tooltip": "Enable or disable the purge until played feature.",
		    "saveInPreset": false,
		    "isPluginParameter": false,
		    "bgColour": 0xff161619,
			"itemColour": 0xff315f27,
			"itemColour2": 0xfbf5f5f5,
			"textColour": 0xffffffff,
			"enableMidiLearn": false
		});
		
		Content.addKnob("knbCoarseDetune", 0, 0);
		Content.setPropertiesFromJSON("knbCoarseDetune", {
		    "x": 153, "y": 214, "width": 60, "height": 74,
		    "parentComponent": "pnlSettingsTab0",
		    "text": "Coarse",
		    "tooltip": "Coarse tuning.",
		    "isPluginParameter": true,
		    "pluginParameterName": "Coarse Tuning",
		    "processorId": "coarseFineTune",
		    "parameterId": "Coarse",
		    "bgColour": 0xff494949,
			"itemColour": 0xff15141a,
			"itemColour2": 0xffb1b1b1,
			"textColour": 0xffbcbcbc,
		    "min": -12.0,
		    "max": 12.0,
			"mode": "Linear",
		    "style": "Knob",
		    "stepSize": 1.0,
		    "middlePosition": 0.0,
		    "suffix": "st",
		    "showValuePopup": "No"
		});
		
		Content.addKnob("knbFineDetune", 0, 0);
		Content.setPropertiesFromJSON("knbFineDetune", {
		    "x": 236, "y": 214, "width": 60, "height": 74,
		    "parentComponent": "pnlSettingsTab0",
		    "text": "Fine",
		    "tooltip": "Fine tuning.",
		    "isPluginParameter": true,
		    "pluginParameterName": "Fine Tuning",
		    "processorId": "coarseFineTune",
		    "parameterId": "Fine",
		    "bgColour": 0xff494949,
			"itemColour": 0xff15141a,
			"itemColour2": 0xffb1b1b1,
			"textColour": 0xffbcbcbc,
		    "min": -100.0,
		    "max": 100.0,
		    "mode": "Linear",
		    "style": "Knob",
		    "stepSize": 1.0,
		    "middlePosition": 0.0,
		    "suffix": "ct",
		    "showValuePopup": "No"
		});

		Content.addKnob("knbTranspose", 0, 0);
		Content.setPropertiesFromJSON("knbTranspose", {
		    "x": 320, "y": 214, "width": 60, "height": 74,
		    "parentComponent": "pnlSettingsTab0",
		    "text": "Transpose",
		    "tooltip": "Transpose.",
		    "isPluginParameter": true,
		    "pluginParameterName": "Transpose",
		    "processorId": "transposer",
		    "parameterId": "SemiTone",
		    "bgColour": 0xff494949,
			"itemColour": 0xff15141a,
			"itemColour2": 0xffb1b1b1,
			"textColour": 0xffbcbcbc,
		    "min": -2.0,
		    "max": 2.0,
		    "mode": "Linear",
		    "style": "Knob",
		    "stepSize": 1.0,
		    "middlePosition": 0.0,
		    "suffix": "st",
		    "showValuePopup": "No"
		});
		
		Content.addFloatingTile("fltAudioSettings", 0, 0);
		Content.setPropertiesFromJSON("fltAudioSettings", {
		    "x": -25, "y": 0, "width": 400, "height": 420,
		    "parentComponent": "pnlSettingsTab1",
		    "bgColour": 0x0,
			"itemColour": 0x0,
			"itemColour2": 0x0,
			"itemColour3": 0x0,
			"textColour": 0xffe2e2e2,
		    "ContentType": "CustomSettings",
			"Data": "{\n  \"Driver\": true,\n  \"Device\": true,\n  \"Output\": true,\n  \"BufferSize\": true,\n  \"SampleRate\": true,\n  \"GlobalBPM\": false,\n  \"StreamingMode\": false,\n  \"ScaleFactor\": false,\n  \"VoiceAmountMultiplier\": false,\n  \"ClearMidiCC\": false,\n  \"SampleLocation\": false,\n  \"DebugMode\": false,\n  \"UseOpenGL\": false,\n  \"ScaleFactorList\": [\n    0.5,\n    0.75,\n    1.0,\n    1.25,\n    1.5,\n    2.0,\n    2.5,\n    3.0,\n    4.0\n  ]\n}",
		    "Font": "medium",
		    "FontSize": 16.0
		});
		
		Content.addFloatingTile("fltMidiChannels", 0, 0);
		Content.setPropertiesFromJSON("fltMidiChannels", {
			"x": 22, "y": 35, "width": 175, "height": 360,
		    "parentComponent": "pnlSettingsTab2",
		    "Font": "medium",
		    "FontSize": 14.0,
		    "ContentType": "MidiChannelList",
		    "Data": "{\r\n}"
		});
		
		Content.addFloatingTile("fltMidiSources", 0, 0);
		Content.setPropertiesFromJSON("fltMidiSources", {
			"x": 235, "y": 35, "width": 310, "height": 360,
		    "parentComponent": "pnlSettingsTab2",
		    "Font": "medium",
		    "FontSize": 14.0,
		    "ContentType": "MidiSources",
		    "Data": "{\r\n}"
		});
		
		Content.addFloatingTile("fltMidiLearn", 0, 0);
		Content.setPropertiesFromJSON("fltMidiLearn", {
			"x": 30, "y": 35, "width": 506, "height": 367,
		    "parentComponent": "pnlSettingsTab3",
		    "bgColour": 0x0,
			"itemColour": 0x58919191,
			"itemColour2": 0x0,
			"itemColour3": 0x0,
			"textColour": 0xffeefdff,
		    "Font": "medium",
		    "FontSize": 16.0,
		    "ContentType": "MidiLearnPanel",
		    "Data": "{\r\n}"
		});

		Content.setPropertiesFromJSON("pnlSettingsTab4",
		{
			"y": 56, "height": 404,
			"bgColour": 0x0,
			"itemColour": 0x0,
			"itemColour2": 0x0
		});

		Content.addFloatingTile("fltMpe", 0, 0);
		Content.setPropertiesFromJSON("fltMpe", {
			"x": 20, "y": 0, "width": 526, "height": 367,
		    "parentComponent": "pnlSettingsTab4",
		    "bgColour": 0x0,
			"itemColour": 0x80ffffff,
			"itemColour2": 0x1affffff,
			"itemColour3": 0x0,
			"textColour": Colours.white,
		    "Font": "regular",
		    "FontSize": 16.0,
		    "ContentType": "MPEPanel",
		    "Data": "{\r\n}"
		});
		
		Content.addButton("btnSettingsClose", 0, 0);
		Content.setPropertiesFromJSON("btnSettingsClose", {
			"x": 690 , "y": 10, "width": 40, "height": 36,
		    "parentComponent": "pnlSettings",
		    "text": "x",
		    "tooltip": "",
		    "saveInPreset": false,
		    "bgColour": 0xff161619,
		    "itemColour": 0xff9f9fb1,
		    "itemColour2": 0xffffffff,
		    "textColour": 0xffffffff,
		    "enableMidiLearn": false
		});
	}
		
	inline function createTablePanel(parentId, id, processorId, area)
	{
		local parent = Content.getComponent(parentId);

		Content.addTable(id, 0, 0);
		Content.setPropertiesFromJSON(id, {
			"x": area[0] , "y": area[1], "width": area[2], "height": area[3],
			"parentComponent": parentId,
			"processorId": processorId,
			"bgColour": 0xff15141a,
			"itemColour": 0xe95b5a4d,
			"itemColour2": 0xfff8d799,
		    "customColours": true
		});
	}

	inline function createVelocityPanels(parentId, count)
	{
		for (i = 0; i < count; i++)
			createTablePanel(parentId, "tblVelocity" + i, "", [0, 0, 200, 179]);
	}

	inline function createMixerPanel(parentId, numChannels)
	{
		local parent = Content.getComponent(parentId);
		local a = parent.getLocalBounds(0);
		local channelWidth = 81 * numChannels < a[2] ? a[2] / numChannels + 1.5 : 81;
		local width = channelWidth * numChannels - 8;	

		Content.addPanel("pnlMixerControls0", 0, 0);
		Content.setPropertiesFromJSON("pnlMixerControls0", {
			"x": 0, "y": 0, "width": a[2], "height": a[3],
			"parentComponent": parentId,
			"bgColour": 0x0,
			"itemColour": 0x0,
			"itemColour2": 0x0,
			"textColour": 0xffe2e2e2,
			"borderSize": 0,
			"borderRadius": 0
		});

		for (i = 0; i < numChannels; i++)
		{
			Content.addKnob("knbPan" + i, 0, 0);
			Content.setPropertiesFromJSON("knbPan" + i, {
				"x": channelWidth * i + channelWidth / 2 - 38 / 2 - 2, "y": 55, "width": 38, "height": 38,
				"parentComponent": "pnlMixerControls0",
				"text": "",
				"tooltip": "Set the channel's pan.",
				"isPluginParameter": true,
				"pluginParameterName": "Channel " + (i + 1) + " pan",
				"processorId": "mixerGain" + i,
				"parameterId": "Balance",
				"bgColour": 0xff2f2f34,
				"itemColour": 0xffffffff,
				"itemColour2": 0xffb3b3b3,
				"textColour": 0xfff8d799,
				"mode": "Pan",
				"style": "Knob",
				"showValuePopup": "Below",
				"showTextBox": false
			});
			
			Content.addFloatingTile("fltPeakMeter" + i, 0, 0);
			Content.setPropertiesFromJSON("fltPeakMeter" + i, {
				"x": channelWidth * i + channelWidth / 2 - 20 / 2 - 2, "y": 120, "width": 20, "height": 202,
				"parentComponent": "pnlMixerControls0",
				"bgColour": 0x0,
				"itemColour": 0xff343437,
				"itemColour2": 0xff5a5f6c,
				"textColour": 0x0,
				"ContentType": "MatrixPeakMeter",
				"saveInPreset": false,
				"Data": "{\n  \"ProcessorId\": \"mixerGain" + i + "\",\n  \"Index\": -1,\n  \"FollowWorkspace\": false,\n  \"SegmentLedSize\": 0.0,\n  \"UpDecayTime\": 200.0,\n  \"DownDecayTime\": 500.0,\n  \"UseSourceChannels\": false,\n  \"SkewFactor\": 0.2,\n  \"PaddingSize\": 0.5,\n  \"ShowMaxPeak\": 1.0,\n  \"ChannelIndexes\": [\n    " + (i * 2) + ",\n    " + (i * 2 + 1) + "\n  ]\n}"
			});

			Content.addKnob("knbGain" + i, 0, 0);
			Content.setPropertiesFromJSON("knbGain" + i, {
				"x": channelWidth * i + channelWidth / 2 - 20 / 2 - 2, "y": 120, "width": 20, "height": 202,
				"parentComponent": "pnlMixerControls0",
				"text": "Gain",
				"tooltip": "Set the channel's volume.",
				"isPluginParameter": true,
				"pluginParameterName": "Channel " + (i + 1) + " volume",
				"processorId": "mixerGain" + i,
				"parameterId": "Gain",
				"defaultValue": 0,
				"bgColour": 0x0,
				"itemColour": 0xfff8d799,
				"itemColour2": 0xffd7d0bc,
				"textColour": 0xff343437,
				"mode": "Decibel",
				"max": 3.0,
				"style": "Vertical",
				"showValuePopup": "Right",
				"showTextBox": false				
			});

			if (i == numChannels - 1)
				Content.setPropertiesFromJSON("knbGain" + i, {"showValuePopup": "Left"});
	
			Content.addButton("btnPurge" + i, 0, 0);
			Content.setPropertiesFromJSON("btnPurge" + i, {
				"x": channelWidth * i + channelWidth / 2 - 21 / 2 - 2, "y": 348, "width": 21, "height": 21,
				"parentComponent": "pnlMixerControls0",
				"text": "power",
				"tooltip": "Purge or load this channel's samples.",
				"bgColour": 0x0,
				"itemColour": 0xff999b9a,
				"itemColour2": 0xfffbedba,
				"textColour": 0x0,
				"enableMidiLearn": false
			});
			
			Content.addComboBox("cmbOutput" + i, 0, 0);
			Content.setPropertiesFromJSON("cmbOutput" + i, {
				"x": channelWidth * i + channelWidth / 2 - 55 / 2 - 2, "y": 427, "width": 55, "height": 27,			
				"parentComponent": "pnlMixerControls0",
				"text": "Output",
				"tooltip": "Set the channel's output.",
				"bgColour": 0xff2f2f34,
				"itemColour": 0x0,
				"itemColour2": 0x0,
				"textColour": 0xffe0e0e0,
				"items": "1/2",
				"fontName": "medium",
				"fontSize": 14,
				"enableMidiLearn": false
			});
		}
		
		for (i = 0; i < 2; i++)
		{
			Content.addButton("btnMixer" + i, 0, 0);
			Content.setPropertiesFromJSON("btnMixer" + i, {
				"x": i == 0 ? 10 : a[2] - 20, "y": a[3] / 2 - 7, "width": 10, "height": 14,
				"parentComponent": parentId,
				"text": i == 0 ? "triangleLeft" : "triangleRight",
				"tooltip": "Goto " + i == 0 ? "previous" : "next" + " mixer page",
				"bgColour": 0x0,
				"itemColour": 0xff949494,
				"itemColour2": 0xffd7d7d7,
				"textColour": 0x0,
				"isMomentary": true,
				"enableMidiLearn": false
			});
		}
	}
	
	inline function createArticulationsPanel(parentId)
	{	
		local parent = Content.getComponent(parentId);
		local a = parent.getLocalBounds(0);

		Content.addViewport("vptArticulations", 0, 0);
		Content.setPropertiesFromJSON("vptArticulations",  {
			"x": 10, "y": 10, "width": a[2] - 20, "height": a[3] - 20,
			"parentComponent": parentId,
			"saveInPreset": false,
			"scrollBarThickness": 8
		});
		
		Content.addPanel("pnlArticulationList", 0, 0);
		Content.setPropertiesFromJSON("pnlArticulationList",  {
			"x": 0, "y": 0, "width": a[2] - 20, "height": 100,
			"parentComponent": "vptArticulations",
			"saveInPreset": true,
			"allowCallbacks": "All Callbacks",
			"bgColour": 0xff2f2f34,
			"itemColour": 0xff3a393f,
			"itemColour2": 0xfff8d799,
			"textColour": 0xffe2e2e2,
			"borderSize": 0,
			"borderRadius": 5
		});

		Content.addPanel("pnlArticulationGain", 0, 0);
		Content.setPropertiesFromJSON("pnlArticulationGain", {
			"x": a[2] - 40, "y": 0, "width": 20, "height": 100,
			"parentComponent": "pnlArticulationList",
			"allowCallbacks": "All Callbacks",
			"bgColour": 0xff161619,
			"itemColour": 0xffd2b580,
			"itemColour2": 0x0,
			"textColour": 0x0,
			"borderSize": 0,
			"borderRadius": 4
		});

		Content.addSliderPack("slpArticulationGain", 0, 0);
		Content.setPropertiesFromJSON("slpArticulationGain", {
			"parentComponent": "pnlArticulationList",
			"saveInPreset": true,
			"sliderAmount": 25,
			"stepSize": 0.01,
			"min": 0.0,
			"max": 1.0,
			"flashActive": false,
			"showValueOverlay": false,
			"visible": false
		});
	}

	inline function createEnvelopePanel(parentId, processorId)
	{
		local parent = Content.getComponent(parentId);
		local a = parent.getLocalBounds(0);

		local fltEnvelope = Content.addFloatingTile("fltEnvelope", 0, 0);
		local tileData = {"Type": "AHDSRGraph", "ProcessorId": processorId, "Index": -1};
		fltEnvelope.setContentData(tileData);

		Content.setPropertiesFromJSON("fltEnvelope",  {
			"x": 15, "y": 10, "width": 290, "height": 120,
			"parentComponent": parentId,
			"bgColour": 0x0,
			"itemColour": 0xe95b5a4d,
			"itemColour2": 0xfff8d799,
			"itemColour3": 0x0,
			"textColour": 0x0
		});

		local text = ["CURVE", "A", "H", "D", "S", "R"];
		local tooltip = ["Attack curve", "Attack time", "Hold time", "Decay time", "Sustain level", "Release time"];
		local parameterName = ["Attack Curve", "Attack", "Hold", "Decay", "Sustain", "Release"];
		local mode = ["NormalizedPercentage", "Time", "Time", "Time", "Decibel", "Time"];
		local defaultValue = [0.5, 2.0, 10.0, 1000, -2.0, 600];
		local middlePosition = [0.5, 1000, 1000, 1000, -18.0, 1000];
		local x = [10, 61, 112, 163, 214, 265];

		for (i = 0; i < 6; i++)
		{
			Content.addKnob("knbAHDSR" + i, 0, 0);
			Content.setPropertiesFromJSON("knbAHDSR" + i, {
				"x": x[i], "y": 130, "width": 45, "height": 75,
				"parentComponent": parentId,
				"text": text[i],
				"tooltip": tooltip[i],
				"saveInPreset": false,
				"isPluginParameter": true,
				"pluginParameterName": parameterName[i],
				"defaultValue": defaultValue[i],
				"bgColour": 0xff353535,
				"itemColour": 0xff15141a,
				"itemColour2": 0xffb3b3b3,
				"textColour": Colours.white,
				"style": "Knob",
				"mode": mode[i],
				"middlePosition": middlePosition[i],
				"showValuePopup": "No",
			});
		}

		Content.addSliderPack("slpAHDSR", 0, 0);
		Content.setPropertiesFromJSON("slpAHDSR", {
			"parentComponent": parentId,
			"saveInPreset": true,
			"min": -100,
			"max": 20000,
			"sliderAmount": 250,
			"stepSize": 0.01,
			"flashActive": false,
			"showValueOverlay": false,
			"visible": false
		});
	}
	
	inline function createCard(index, tabNames, a)
	{
		if (!Array.isArray(tabNames))
			return Engine.showErrorMessage("Ui.createCard - tabNames should be an array.", false);

		Content.addPanel("pnlCard" + index, 0, 0);
		Content.setPropertiesFromJSON("pnlCard" + index, {
			"x": a[0], "y": a[1], "width": a[2], "height": a[3],
			"parentComponent": "pnlBody",
			"text": "",
			"saveInPreset": true,
			"bgColour": 0xff1d1d21,
			"itemColour": 0xff161619,
			"itemColour2": 0x0,
			"textColour": 0xfff8efc4,
			"borderSize": 0,
			"borderRadius": 5,
			"allowCallbacks": "All Callbacks"
		});

		for (i = 0; i < tabNames.length; i++)
		{
			local tab = tabNames[i];

			Content.addPanel("pnl" + tab, 0, 0);
			Content.setPropertiesFromJSON("pnl" + tab, {
				"x": 0, "y": 40, "width": a[2], "height": a[3] - 40,
				"parentComponent": "pnlCard" + index,
				"text": tab.toUpperCase(),
				"visible": i < 1,
				"bgColour": 0x0,
				"itemColour": 0x0,
				"itemColour2": 0x0,
				"textColour": 0xffe2e2e2,
				"borderSize": 0,
				"borderRadius": 0
			});
		}		
	}
}

