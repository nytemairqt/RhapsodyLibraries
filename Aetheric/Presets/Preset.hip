Processor 	Type SynthChain ID 
template Bypassed Gain 	      �?Balance 	        VoiceLimit 	      P@KillFadeTime 	      4@IconColour 0 packageName  EditorStates BodyShown 0 Visible 1 Solo 0 Folded 1  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors  Processor Type ScriptProcessor ID Interface Bypassed Script �Content.makeFrontInterface(1000, 710);


include("RhapsodyBoilerplate/includes/Ui.js");


include("RhapsodyBoilerplate/includes/LookAndFeel.js");


include("RhapsodyBoilerplate/includes/Paths.js");


include("RhapsodyBoilerplate/includes/Expansions.js");


include("RhapsodyBoilerplate/includes/Header.js");


include("RhapsodyBoilerplate/includes/Footer.js");


include("RhapsodyBoilerplate/includes/Presets.js");


include("RhapsodyBoilerplate/includes/UserSettings.js");


include("RhapsodyBoilerplate/includes/ZoomHandler.js");

function onNoteOn()
{
	
}
 
function onNoteOff()
{
	
}
 
function onController()
{
	
}
 
function onTimer()
{
	
}
 
function onControl(number, value)
{
	
}
 

 EditorStates BodyShown 1 Visible 1 Solo 0 contentShown 1 onInitOpen 1  ChildProcessors   Content  Control type ScriptSlider id knbMasterGain value 	   ���� Control type ScriptSlider id knbMasterPan value 	         Control type ScriptSlider id knbCoarseDetune value 	         Control type ScriptSlider id knbFineDetune value 	         Control type ScriptSlider id knbTranspose value 	         UIData  ContentProperties DeviceType 	Desktop Component type ScriptPanel id pnlContainer x 	        y 	        text  width 	     @�@height 	     0�@bgColour 0 itemColour 4280098081 itemColour2 4280098081 textColour 0 borderSize 	        borderRadius 	        Component type ScriptPanel id pnlHeader x 	        y 	        width 	     @�@height 	      N@bgColour 0 itemColour 0 itemColour2 0 textColour 0 parentComponent pnlContainer borderSize 	        borderRadius 	        Component type ScriptButton id 
btnTitle x 	      4@y 	        text 
RHAPSODY width 	      i@height 	      N@bgColour 0 itemColour 0 itemColour2 0 textColour 4293059298 saveInPreset 0 parentComponent pnlHeader isMomentary 1 enableMidiLearn 0  Component type ScriptButton id btnSettings x 	      �@y 	      5@text 
settings width 	      2@height 	      2@bgColour 0 itemColour 4291809231 itemColour2 4293321983 textColour 0 saveInPreset 0 parentComponent pnlHeader enableMidiLearn 0  Component type ScriptPanel id pnlPresetDisplay x 	     ؃@y 	      (@text  width 	     �u@height 	      B@bgColour 4279637529 itemColour 4281216563 itemColour2 0 textColour 0 parentComponent pnlHeader borderSize 	        borderRadius 	      @Component type ScriptButton id btnPresetBrowser x 	      @y 	        text Init | Init width 	     q@height 	      B@bgColour 0 itemColour 0 itemColour2 0 parentComponent pnlPresetDisplay enableMidiLearn 0 saveInPreset 0  Component type ScriptButton id btnPreset0 x 	     �q@y 	      &@text arrowLeft width 	      "@height 	      ,@bgColour 0 itemColour 4292927712 itemColour2 4291216837 textColour 0 saveInPreset 0 parentComponent pnlPresetDisplay isMomentary 1 enableMidiLearn 0  Component type ScriptButton id btnPreset1 x 	      s@y 	      &@text arrowRight width 	      "@height 	      ,@bgColour 0 itemColour 4292927712 itemColour2 4291216837 textColour 0 saveInPreset 0 parentComponent pnlPresetDisplay isMomentary 1 enableMidiLearn 0  Component type ScriptButton id btnPresetSave x 	     `t@y 	      &@text save width 	      ,@height 	      ,@bgColour 0 itemColour 4292927712 itemColour2 4291216837 textColour 0 saveInPreset 0 parentComponent pnlPresetDisplay isMomentary 1 enableMidiLearn 0  Component type ScriptButton id btnUnload x 	     ��@y 	      5@text 	widgets width 	      2@height 	      2@bgColour 0 itemColour 4291809231 itemColour2 4293321983 textColour 0 saveInPreset 0 parentComponent pnlHeader isMomentary 1 enableMidiLearn 0  Component type ScriptPanel id 	pnlBody x 	      @y 	      N@text  width 	     ��@height 	     ��@bgColour 0 itemColour 4281282356 itemColour2 4281282356 textColour 0 parentComponent pnlContainer borderSize 	        borderRadius 	      (@ Component type ScriptPanel id pnlStatusBar x 	      @y 	     H�@text  width 	     ��@height 	     �C@bgColour 0 itemColour 4281282356 itemColour2 4293978318 textColour 4293059571 parentComponent pnlContainer borderSize 	        borderRadius 	        Component type ScriptFloatingTile id 
fltStats x 	      .@y 	      $@ContentType PerformanceLabel width 	      l@height 	      4@bgColour 0 itemColour 0 itemColour2 0 textColour 1828716543 parentComponent pnlStatusBar Font medium  Component type ScriptButton id 	btnLogo x 	     X{@y 	      (@text logo width 	     @_@height 	      .@tooltip  Visit the developer's website. bgColour 0 itemColour 4293059571 itemColour2 4291875295 textColour 0 saveInPreset 0 parentComponent pnlStatusBar isMomentary 1 enableMidiLearn 0  Component type ScriptFloatingTile id fltPeakMeter x 	     І@y 	      *@ContentType MatrixPeakMeter width 	      Y@height 	      0@bgColour 0 itemColour 4280361253 itemColour2 4284112748 textColour 0 parentComponent pnlStatusBar Data {
  "ProcessorId": "template",
  "Index": -1,
  "FollowWorkspace": false,
  "SegmentLedSize": 0.0,
  "UpDecayTime": 200.0,
  "DownDecayTime": 500.0,
  "UseSourceChannels": true,
  "SkewFactor": 0.3,
  "PaddingSize": 0.5,
  "ShowMaxPeak": 1.0,
  "ChannelIndexes": [
    0,
    1,
 ]
}  Component type ScriptSlider id knbMasterGain x 	     І@y 	      *@style Horizontal middlePosition 	      2�stepSize 	   ����?min 	      Y�max 	        suffix  dB mode 	Decibel text Gain width 	      Y@height 	      0@defaultValue 	      �tooltip Master volume. bgColour 0 itemColour 4279571482 itemColour2 4292664540 isPluginParameter 1 pluginParameterName Master Volume parentComponent pnlStatusBar processorId masterGain parameterId Gain dragDirection Horizontal showValuePopup Below showTextBox 0  Component type ScriptSlider id knbMasterPan x 	     Ћ@y 	      *@style Horizontal middlePosition 	        stepSize 	      �?min 	      Y�max 	      Y@suffix L mode Pan text Master Pan width 	      T@height 	      0@tooltip Master pan. bgColour 4280361253 itemColour 4279571482 itemColour2 4292664540 isPluginParameter 1 pluginParameterName Master Pan parentComponent pnlStatusBar processorId masterGain parameterId 	Balance dragDirection Horizontal showValuePopup Below showTextBox 0  Component type ScriptPanel id pnlFooter x 	        y 	     ��@text  width 	     @�@height 	     @U@bgColour 0 itemColour 0 itemColour2 0 textColour 0 parentComponent pnlContainer borderSize 	        borderRadius 	        Component type ScriptButton id 
btnPanic x 	      ;@y 	     �A@text warningCircle width 	      2@height 	      2@tooltip MIDI Panic - All notes off. itemColour 1720750224 itemColour2 4218713204 saveInPreset 0 parentComponent pnlFooter isMomentary 1 enableMidiLearn 0  Component 
type ScriptFloatingTile id fltKeyboard x 	      R@y 	      $@ContentType 
Keyboard width 	     ��@height 	     �P@bgColour 4284769380 parentComponent pnlFooter Data ^{
  "KeyWidth": 15.0,
  "DisplayOctaveNumber": false,
  "LowKey": 12,
  "HiKey": 108,
  "CustomGraphics": false,
  "DefaultAppearance": true,
  "BlackKeyRatio": 0.699999988079071,
  "ToggleMode": false,
  "MidiChannel": 1,
  "UseVectorGraphics": true,
  "UseFlatStyle": false,
  "MPEKeyboard": false,
  "MPEStartChannel": 2,
  "MPEEndChannel": 16
}  Component type ScriptPanel id pnlSettingsContainer x 	        y 	        text  width 	     @�@height 	     0�@bgColour 2013265920 itemColour 0 itemColour2 0 textColour 0 parentComponent pnlContainer borderSize 	        borderRadius 	        allowCallbacks Clicks Only visible 0 Component type ScriptPanel id pnlSettings x 	     @`@y 	      Y@text 
SETTINGS width 	      �@height 	     �|@bgColour 4281282356 itemColour 4280098081 itemColour2 0 textColour 4292730333 parentComponent pnlSettingsContainer borderSize 	        borderRadius 	      (@Component type ScriptPanel id pnlSettingsMenu x 	      $@y 	     �R@text  width 	     `c@height 	�       bgColour 	.)*�    itemColour 4292664540 itemColour2 0 textColour 4293519849 parentComponent pnlSettings borderSize 	        borderRadius 	      @allowCallbacks All Callbacks  Component type ScriptPanel id pnlSettingsTab0 x 	     �e@y 	      >@text ENGINE width 	     ��@height 	     @z@bgColour 4280098081 itemColour 4279637529 itemColour2 0 textColour 4292730333 parentComponent pnlSettings borderSize 	        borderRadius 	      (@Component type ScriptFloatingTile id fltEngineSettings x 	      9�y 	        ContentType CustomSettings width 	      y@height 	     @z@bgColour 0 itemColour 0 itemColour2 0 textColour 4293059298 parentComponent pnlSettingsTab0 Font medium FontSize 	      0@Data �{
  "Driver": false,
  "Device": false,
  "Output": false,
  "BufferSize": false,
  "SampleRate": false,
  "GlobalBPM": true,
  "StreamingMode": true,
  "ScaleFactor": false,
  "VoiceAmountMultiplier": true,
  "ClearMidiCC": false,
  "SampleLocation": false,
  "DebugMode": false,
  "UseOpenGL": true,
  "ScaleFactorList": [
    0.5,
    0.75,
    1.0,
    1.25,
    1.5,
    2.0,
    2.5,
    3.0,
    4.0
  ]
}  Component type ScriptButton id btnLazyLoad x 	     �b@y 	     �e@text  width 	      D@height 	      4@tooltip 3Enable or disable the purge until played feature. bgColour 4279637529 itemColour 4281425703 itemColour2 4227200501 saveInPreset 0 parentComponent pnlSettingsTab0 enableMidiLearn 0  Component type ScriptSlider id knbCoarseDetune x 	      c@y 	     �j@middlePosition 	        text Coarse width 	      N@height 	     �R@min 	      (�max 	      (@tooltip Coarse tuning. bgColour 4282992969 itemColour 4279571482 itemColour2 4289835441 textColour 4290559164 isPluginParameter 1 pluginParameterName Coarse Tuning parentComponent pnlSettingsTab0 processorId coarseFineTune parameterId Coarse stepSize 	      �?suffix st  Component type ScriptSlider id knbFineDetune x 	     �m@y 	     �j@middlePosition 	        text Fine width 	      N@height 	     �R@min 	      Y�max 	      Y@tooltip Fine tuning. bgColour 4282992969 itemColour 4279571482 itemColour2 4289835441 textColour 4290559164 isPluginParameter 1 pluginParameterName Fine Tuning parentComponent pnlSettingsTab0 processorId coarseFineTune parameterId Fine stepSize 	      �?suffix ct  Component type ScriptSlider id knbTranspose x 	      t@y 	     �j@middlePosition 	        text Transpose width 	      N@height 	     �R@min 	       �max 	       @tooltip Transpose. bgColour 4282992969 itemColour 4279571482 itemColour2 4289835441 textColour 4290559164 isPluginParameter 1 pluginParameterName Transpose parentComponent pnlSettingsTab0 processorId transposer parameterId 
SemiTone stepSize 	      �?suffix st  Component type ScriptPanel id pnlSettingsTab1 x 	     �e@y 	      >@text AUDIO width 	     ��@height 	     @z@bgColour 4280098081 itemColour 4279637529 itemColour2 0 textColour 4292730333 parentComponent pnlSettings borderSize 	        borderRadius 	      (@visible Component type ScriptFloatingTile id fltAudioSettings x 	      9�y 	        ContentType CustomSettings width 	      y@height 	     @z@bgColour 0 itemColour 0 itemColour2 0 textColour 4293059298 parentComponent pnlSettingsTab1 Font medium FontSize 	      0@Data �{
  "Driver": true,
  "Device": true,
  "Output": true,
  "BufferSize": true,
  "SampleRate": true,
  "GlobalBPM": false,
  "StreamingMode": false,
  "ScaleFactor": false,
  "VoiceAmountMultiplier": false,
  "ClearMidiCC": false,
  "SampleLocation": false,
  "DebugMode": false,
  "UseOpenGL": false,
  "ScaleFactorList": [
    0.5,
    0.75,
    1.0,
    1.25,
    1.5,
    2.0,
    2.5,
    3.0,
    4.0
  ]
}  Component type ScriptPanel id pnlSettingsTab2 x 	     �e@y 	      >@text MIDI width 	     ��@height 	     @z@bgColour 4280098081 itemColour 4279637529 itemColour2 0 textColour 4292730333 parentComponent pnlSettings borderSize 	        borderRadius 	      (@visible Component 
type ScriptFloatingTile id fltMidiChannels x 	      6@y 	     �A@ContentType MidiChannelList width 	     �e@height 	     �v@parentComponent pnlSettingsTab2 Font medium Data {
}  Component 
type ScriptFloatingTile id fltMidiSources x 	     `m@y 	     �A@ContentType MidiSources width 	     `s@height 	     �v@parentComponent pnlSettingsTab2 Font medium Data {
}  Component type ScriptPanel id pnlSettingsTab3 x 	     �e@y 	      >@text AUTOMATION width 	     ��@height 	     @z@bgColour 4280098081 itemColour 4279637529 itemColour2 0 textColour 4292730333 parentComponent pnlSettings borderSize 	        borderRadius 	      (@visible Component type ScriptFloatingTile id fltMidiLearn x 	      >@y 	     �A@ContentType MidiLearnPanel width 	     �@height 	     �v@bgColour 0 itemColour 1485934993 itemColour2 0 textColour 4293852671 parentComponent pnlSettingsTab3 Font medium FontSize 	      0@Data {
}  Component type ScriptPanel id pnlSettingsTab4 x 	     �e@y 	      L@text MPE width 	     ��@height 	     @y@bgColour 0 itemColour 0 itemColour2 0 textColour 4292730333 parentComponent pnlSettings borderSize 	        borderRadius 	      (@visible Component type ScriptFloatingTile id fltMpe x 	      4@y 	        ContentType 
MPEPanel width 	     p�@height 	     �v@bgColour 0 itemColour 2164260863 itemColour2 452984831 parentComponent pnlSettingsTab4 Font 	regular FontSize 	      0@Data {
}  Component type ScriptButton id btnSettingsClose x 	     ��@y 	      $@text x width 	      D@height 	      B@bgColour 4279637529 itemColour 4288651185 itemColour2 4294967295 saveInPreset 0 parentComponent pnlSettings enableMidiLearn 0  Component type ScriptPanel id pnlPresetBrowserContainer x 	        y 	        text  width 	     @�@height 	     0�@bgColour 2013265920 itemColour 0 itemColour2 0 textColour 0 parentComponent pnlContainer borderSize 	        borderRadius 	        allowCallbacks Clicks Only visible Component type ScriptPanel id pnlPresetBrowser x 	      @y 	      N@text  width 	     ��@height 	     ��@bgColour 4281282356 itemColour 0 itemColour2 0 textColour 0 parentComponent pnlPresetBrowserContainer borderSize 	        borderRadius 	      (@Component type ScriptFloatingTile id fltPresetBrowser x 	      @y 	      $@ContentType PresetBrowser width 	     ��@height 	     0�@bgColour 0 itemColour 4290690772 itemColour2 4292664540 parentComponent pnlPresetBrowser Font bold Data �{
  "ShowSaveButton": true,
  "ShowExpansionsAsColumn": false,
  "ShowFolderButton": false,
  "ShowNotes": true,
  "ShowEditButtons": true,
  "EditButtonOffset": 15,
  "ShowAddButton": true,
  "ShowRenameButton": true,
  "ShowDeleteButton": true,
  "ShowFavoriteIcon": true,
  "ButtonsInsideBorder": true,
  "NumColumns": 3,
  "ColumnWidthRatio": [
    0.3333333333333333,
    0.3333333333333333,
    0.3333333333333333
  ],
  "ListAreaOffset": [
    0,
    5,
    0,
    -15
  ],
  "ColumnRowPadding": [
    65,
    15,
    15,
    15
  ],
  "SearchBarBounds": [
    230,
    0,
    506,
    36
  ],
  "SaveButtonBounds": [
    740,
    0,
    191,
    36
  ],
  "FavoriteButtonBounds": [
    5,
    0,
    241,
    36
  ]
}  Component type ScriptButton id btnPresetBrowserClose x 	     `�@y 	      $@text x width 	      D@height 	      B@tooltip Close the preset browser. bgColour 4279637529 itemColour 4291809231 itemColour2 4294967295 saveInPreset 0 parentComponent pnlPresetBrowser enableMidiLearn 0  Component type ScriptPanel id pnlPresetNotesBlocker x 	      $@y 	     �K@text  width 	     P�@height 	      B@bgColour 4281282356 itemColour 0 itemColour2 0 textColour 4291480266 parentComponent pnlPresetBrowser borderSize 	        borderRadius 	         Component 	type ScriptPanel id 	pnlZoom x 	     ��@y 	     ��@text Resize Interface width 	      $@height 	      $@parentComponent pnlContainer allowCallbacks Clicks, Hover & Dragging  Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors  Processor Type SimpleGain ID masterGain Bypassed Gain 	   ����Delay 	        Width 	      Y@Balance 	        InvertPolarity 	        EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors  Processor Type ModulatorChain ID Gain Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID Delay Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID Width Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID Pan Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� Processor Type GlobalModulatorContainer ID Global Modulator Container0 Bypassed Gain 	      �?Balance 	        VoiceLimit 	      p@KillFadeTime 	      4@IconColour 0 EditorStates BodyShown 1 Visible 1 Solo 0 Folded 1  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID Global Modulators Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� Processor Type SynthChain ID Container0 Bypassed Gain 	      �?Balance 	        VoiceLimit 	      p@KillFadeTime 	      4@IconColour 0 EditorStates BodyShown 0 Visible 1 Solo 0 Folded 1  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type SineSynth ID Sine Wave Generator0 Bypassed Gain 	      �?Balance 	        VoiceLimit 	      p@KillFadeTime 	      4@IconColour 0 OctaveTranspose 	        SemiTones 	        UseFreqRatio 	        CoarseFreqRatio 	      �?FineFreqRatio 	        SaturationAmount 	        EditorStates BodyShown 1 Visible 1 Solo 0 Folded 1  ChildProcessors  Processor Type MidiProcessorChain ID Midi Processor Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID GainModulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors  Processor 	Type SimpleEnvelope ID DefaultEnvelope0 Bypassed Monophonic 	        Retrigger 	      �?Intensity 	      �?Attack 	      @Release 	      $@LinearMode 	      �?EditorStates BodyShown 1 Visible 1 Solo 0  ChildProcessors  Processor Type ModulatorChain ID Attack Time Modulation Bypassed Intensity 	      �?EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type ModulatorChain ID PitchModulation Bypassed Intensity 	        EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   Processor Type EffectChain ID FX Bypassed EditorStates BodyShown 1 Visible 0 Solo 0  ChildProcessors   RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� RoutingMatrix NumSourceChannels    Channel0     Send0 ����Channel1    Send1 ���� macro_controls  macro name 	Macro 1 value 	        midi_cc ���� macro name 	Macro 2 value 	        midi_cc ���� macro name 	Macro 3 value 	        midi_cc ���� macro name 	Macro 4 value 	        midi_cc ���� macro name 	Macro 5 value 	        midi_cc ���� macro name 	Macro 6 value 	        midi_cc ���� macro name 	Macro 7 value 	        midi_cc ���� macro name 	Macro 8 value 	        midi_cc ���� MidiAutomation  Controller Controller    Processor Interface MacroIndex ����Start 	      Y�End 	        FullStart 	      Y�FullEnd 	        Skew 	�);�@Interval 	{�G�z�?Attribute knbMasterGain Inverted  Controller Controller 
   Processor Interface MacroIndex ����Start 	      Y�End 	      Y@FullStart 	      Y�FullEnd 	      Y@Skew 	      �?Interval 	{�G�z�?Attribute knbMasterPan Inverted  MPEData Enabled  