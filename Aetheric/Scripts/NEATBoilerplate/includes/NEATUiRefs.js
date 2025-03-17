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

// Register UI Elements

/* Generic */

const pnlBody = Content.getComponent("pnlBody");

const btnPage = [Content.getComponent("btnSamplePage"),
				  Content.getComponent("btnFXPage"),
				  Content.getComponent("btnArpPage"),
				  Content.getComponent("btnMovePage"),
				  Content.getComponent("btnRandomPage")];
				  
const btnCmbPrev = [Content.getComponent("btnCmbSamplerAPrev"),
					Content.getComponent("btnCmbSamplerBPrev"),
					Content.getComponent("btnCmbSamplerCPrev"),
					Content.getComponent("btnCmbSamplerOtherPrev"),
					Content.getComponent("btnCmbAmpCabSelectPrev"),
					Content.getComponent("btnCmbArpPrev")];
					
const btnCmbNext = [Content.getComponent("btnCmbSamplerANext"),
					Content.getComponent("btnCmbSamplerBNext"),
					Content.getComponent("btnCmbSamplerCNext"),
					Content.getComponent("btnCmbSamplerOtherNext"),
					Content.getComponent("btnCmbAmpCabSelectNext"),
					Content.getComponent("btnCmbArpNext")];		
					
const btnClosePage = Content.getComponent("btnClosePage");

/* Sampler */				  

const pnlSampler = [Content.getComponent("pnlSamplerA"),
					 Content.getComponent("pnlSamplerB"),
					 Content.getComponent("pnlSamplerC"),
					 Content.getComponent("pnlSamplerOther")];

const cmbSampler = [Content.getComponent("cmbSamplerA"),
					Content.getComponent("cmbSamplerB"),
					Content.getComponent("cmbSamplerC"),
					Content.getComponent("cmbSamplerOther")];

const btnSamplerBypass = [Content.getComponent("btnSamplerABypass"),
						  Content.getComponent("btnSamplerBBypass"),
						  Content.getComponent("btnSamplerCBypass"),
						  Content.getComponent("btnSamplerOtherBypass")];
						  
const btnSamplerReverse = [Content.getComponent("btnSamplerAReverse"),
						   Content.getComponent("btnSamplerBReverse"),
						   Content.getComponent("btnSamplerCReverse"),
						   Content.getComponent("btnSamplerOtherReverse")];
						  
const btnSamplerOther = Content.getComponent("btnSamplerOther");						  	
						  
const knbSamplerOffset = [Content.getComponent("knbSamplerAOffset"),
						  Content.getComponent("knbSamplerBOffset"),
						  Content.getComponent("knbSamplerCOffset"),
						  Content.getComponent("knbSamplerOtherOffset")];						 

const knbSamplerA = [Content.getComponent("knbSamplerAAttack"),
					 Content.getComponent("knbSamplerADecay"),
					 Content.getComponent("knbSamplerASustain"),
					 Content.getComponent("knbSamplerARelease"),
					 Content.getComponent("knbSamplerAPitch"),
					 Content.getComponent("knbSamplerATune"),
					 Content.getComponent("knbSamplerAPan"),
					 Content.getComponent("knbSamplerAGain")];

const lblSamplerA = [Content.getComponent("lblSamplerAAttack"),
					 Content.getComponent("lblSamplerADecay"),
					 Content.getComponent("lblSamplerASustain"),
					 Content.getComponent("lblSamplerARelease"),
					 Content.getComponent("lblSamplerAPitch"),
					 Content.getComponent("lblSamplerATune"),
					 Content.getComponent("lblSamplerAPan"),
					 Content.getComponent("lblSamplerAGain")];

const lblSamplerAValue = [Content.getComponent("lblSamplerAAttackValue"),
						  Content.getComponent("lblSamplerADecayValue"),
						  Content.getComponent("lblSamplerASustainValue"),
						  Content.getComponent("lblSamplerAReleaseValue"),
						  Content.getComponent("lblSamplerAPitchValue"),
						  Content.getComponent("lblSamplerATuneValue"),
						  Content.getComponent("lblSamplerAPanValue"),
						  Content.getComponent("lblSamplerAGainValue")];

const knbSamplerB = [Content.getComponent("knbSamplerBAttack"),
					 Content.getComponent("knbSamplerBDecay"),
					 Content.getComponent("knbSamplerBSustain"),
					 Content.getComponent("knbSamplerBRelease"),
					 Content.getComponent("knbSamplerBPitch"),
					 Content.getComponent("knbSamplerBTune"),
					 Content.getComponent("knbSamplerBPan"),
					 Content.getComponent("knbSamplerBGain")];

const lblSamplerB = [Content.getComponent("lblSamplerBAttack"),
					 Content.getComponent("lblSamplerBDecay"),
					 Content.getComponent("lblSamplerBSustain"),
					 Content.getComponent("lblSamplerBRelease"),
					 Content.getComponent("lblSamplerBPitch"),
					 Content.getComponent("lblSamplerBTune"),
					 Content.getComponent("lblSamplerBPan"),
					 Content.getComponent("lblSamplerBGain")];

const lblSamplerBValue = [Content.getComponent("lblSamplerBAttackValue"),
						  Content.getComponent("lblSamplerBDecayValue"),
						  Content.getComponent("lblSamplerBSustainValue"),
						  Content.getComponent("lblSamplerBReleaseValue"),
						  Content.getComponent("lblSamplerBPitchValue"),
						  Content.getComponent("lblSamplerBTuneValue"),
						  Content.getComponent("lblSamplerBPanValue"),
						  Content.getComponent("lblSamplerBGainValue")];							  					 

const knbSamplerC = [Content.getComponent("knbSamplerCAttack"),
					 Content.getComponent("knbSamplerCDecay"),
					 Content.getComponent("knbSamplerCSustain"),
					 Content.getComponent("knbSamplerCRelease"),
					 Content.getComponent("knbSamplerCPitch"),
					 Content.getComponent("knbSamplerCTune"),
					 Content.getComponent("knbSamplerCPan"),
					 Content.getComponent("knbSamplerCGain")];

const lblSamplerC = [Content.getComponent("lblSamplerCAttack"),
					 Content.getComponent("lblSamplerCDecay"),
					 Content.getComponent("lblSamplerCSustain"),
					 Content.getComponent("lblSamplerCRelease"),
					 Content.getComponent("lblSamplerCPitch"),
					 Content.getComponent("lblSamplerCTune"),
					 Content.getComponent("lblSamplerCPan"),
					 Content.getComponent("lblSamplerCGain")];

const lblSamplerCValue = [Content.getComponent("lblSamplerCAttackValue"),
						  Content.getComponent("lblSamplerCDecayValue"),
						  Content.getComponent("lblSamplerCSustainValue"),
						  Content.getComponent("lblSamplerCReleaseValue"),
						  Content.getComponent("lblSamplerCPitchValue"),
						  Content.getComponent("lblSamplerCTuneValue"),
						  Content.getComponent("lblSamplerCPanValue"),
						  Content.getComponent("lblSamplerCGainValue")];	
						  
const knbSamplerOther = [Content.getComponent("knbSamplerOtherAttack"),
						 Content.getComponent("knbSamplerOtherDecay"),
						 Content.getComponent("knbSamplerOtherSustain"),
						 Content.getComponent("knbSamplerOtherRelease"),
						 Content.getComponent("knbSamplerOtherPitch"),
						 Content.getComponent("knbSamplerOtherTune"),
						 Content.getComponent("knbSamplerOtherPan"),
						 Content.getComponent("knbSamplerOtherGain")];

const lblSamplerOther = [Content.getComponent("lblSamplerOtherAttack"),
						 Content.getComponent("lblSamplerOtherDecay"),
						 Content.getComponent("lblSamplerOtherSustain"),
						 Content.getComponent("lblSamplerOtherRelease"),
						 Content.getComponent("lblSamplerOtherPitch"),
						 Content.getComponent("lblSamplerOtherTune"),
						 Content.getComponent("lblSamplerOtherPan"),
						 Content.getComponent("lblSamplerOtherGain")];

const lblSamplerOtherValue = [Content.getComponent("lblSamplerOtherAttackValue"),
							  Content.getComponent("lblSamplerOtherDecayValue"),
							  Content.getComponent("lblSamplerOtherSustainValue"),
							  Content.getComponent("lblSamplerOtherReleaseValue"),
							  Content.getComponent("lblSamplerOtherPitchValue"),
							  Content.getComponent("lblSamplerOtherTuneValue"),
							  Content.getComponent("lblSamplerOtherPanValue"),
							  Content.getComponent("lblSamplerOtherGainValue")];		
							  
/* FX */

const pnlFX = Content.getComponent("pnlFX");		

const pnlFXChildren = [Content.getComponent("pnlFilter"),
					   Content.getComponent("pnlAmp"),
					   Content.getComponent("pnlDrive"),
					   Content.getComponent("pnlUtility"),
					   Content.getComponent("pnlStutter"),
					   Content.getComponent("pnlDegrade"),
					   Content.getComponent("pnlPhaser"),
					   Content.getComponent("pnlReverb"),
					   Content.getComponent("pnlDelay")];
					  
const btnFXBypass = [Content.getComponent("btnFilterBypass"),
					 Content.getComponent("btnAmpBypass"),
					 Content.getComponent("btnDriveBypass"),
					 Content.getComponent("btnDegradeBypass"),
					 Content.getComponent("btnUtilityBypass"),
					 Content.getComponent("btnStutterBypass"),
					 Content.getComponent("btnPhaserBypass"),
					 Content.getComponent("btnReverbBypass"),
					 Content.getComponent("btnDelayBypass")];

// Filter
const knbFilter = [Content.getComponent("knbFilterCutoff"),
				   Content.getComponent("knbFilterQ")];
				   
const lblFilter = [Content.getComponent("lblFilterCutoffValue"),
				   Content.getComponent("lblFilterQValue"),];
				   
const btnFilter = [Content.getComponent("btnFilterHPF"),
				   Content.getComponent("btnFilterLPF")];

// Amp & Cab
const knbAmp = [Content.getComponent("knbAmpGain"),
				Content.getComponent("knbAmpOutput"),
				Content.getComponent("knbAmpTone")];
				
const lblAmp = [Content.getComponent("lblAmpGainValue"),
				Content.getComponent("lblAmpOutputValue"),
				Content.getComponent("lblAmpToneValue")];
				
const btnAmp = [Content.getComponent("btnAmpCabBypass"),
				Content.getComponent("btnAmpOversampling")];										
				
const cmbAmp = [Content.getComponent("cmbAmpCabSelect")];

// Drive
const knbDrive = [Content.getComponent("knbDriveWaveshaper"),
				  Content.getComponent("knbDriveTube")];
				  
const lblDrive = [Content.getComponent("lblDriveWaveshaperValue"),
				  Content.getComponent("lblDriveTubeValue")];
				  
const btnDrive = [Content.getComponent("btnDriveWaveshaperOversampling"),
                  Content.getComponent("btnDriveTubeOversampling")];

// Utility & Stutter
const knbUtility = [Content.getComponent("knbUtilityWidth"),
                    Content.getComponent("knbUtilityGain")];
                    
const lblUtility = [Content.getComponent("lblUtilityWidthValue"),
                    Content.getComponent("lblUtilityGainValue")];
                    
const knbStutter = [Content.getComponent("knbStutterRate"),
                    Content.getComponent("knbStutterAmount")];
                    
const lblStutter = [Content.getComponent("lblStutterRateValue"),
                    Content.getComponent("lblStutterAmountValue")];
                    
const btnStutter = [Content.getComponent("btnStutterPreFX"),
                    Content.getComponent("btnStutterTempoSync")];

// Degrade
const knbDegrade = [Content.getComponent("knbDegradeBitDepth"),
                    Content.getComponent("knbDegradeSampleHold")];

const lblDegrade = [Content.getComponent("lblDegradeBitDepthValue"),
					Content.getComponent("lblDegradeSampleHoldValue")];


// Phaser
const knbPhaser = [Content.getComponent("knbPhaserRateA"),
                   Content.getComponent("knbPhaserRateB"),
                   Content.getComponent("knbPhaserFeedback"),
                   Content.getComponent("knbPhaserMix")];
                   
const lblPhaser = [Content.getComponent("lblPhaserRateAValue"),
                   Content.getComponent("lblPhaserRateBValue"),
                   Content.getComponent("lblPhaserFeedbackValue"),
                   Content.getComponent("lblPhaserMixValue")];

// Reverb
const knbReverb = [Content.getComponent("knbReverbSize"),
                   Content.getComponent("knbReverbDamping"),
                   Content.getComponent("knbReverbWidth"),
                   Content.getComponent("knbReverbMix")];
                   
const lblReverb = [Content.getComponent("lblReverbSizeValue"),
                   Content.getComponent("lblReverbDampingValue"),
                   Content.getComponent("lblReverbWidthValue"),
                   Content.getComponent("lblReverbMixValue")];

// Delay
const knbDelay = [Content.getComponent("knbDelayTimeL"),
                  Content.getComponent("knbDelayTimeR"),
                  Content.getComponent("knbDelayFeedbackL"),
                  Content.getComponent("knbDelayFeedbackR"),
                  Content.getComponent("knbDelayMix")];
                  
const lblDelay = [Content.getComponent("lblDelayTimeLValue"),
                  Content.getComponent("lblDelayTimeRValue"),
                  Content.getComponent("lblDelayFeedbackLValue"),
                  Content.getComponent("lblDelayFeedbackRValue"),
                  Content.getComponent("lblDelayMixValue")];
                  
const btnDelay = [Content.getComponent("btnDelayLinkLR"),
                  Content.getComponent("btnDelayTempoSync")];

/* Arp */

const pnlArp = Content.getComponent("pnlArp");      

const btnArpBypass = [Content.getComponent("btnArpBypass")];

const cmbArp = [Content.getComponent("cmbArp")];

const knbArp = [Content.getComponent("knbArpSteps"),
				Content.getComponent("knbArpSpeed"),
				Content.getComponent("knbArpOctave"),
				Content.getComponent("knbArpSwing")];
				
const lblArp = [Content.getComponent("lblArpStepsValue"),
				Content.getComponent("lblArpSpeedValue"),
				Content.getComponent("lblArpOctaveValue"),
				Content.getComponent("lblArpSwingValue")];
				
const btnArp = [Content.getComponent("btnArpMinor"),
				Content.getComponent("btnArpMajor"),
				Content.getComponent("btnArpNotesReset"),
				Content.getComponent("btnArpNotesInvert"),
				Content.getComponent("btnArpVelocityReset"),
				Content.getComponent("btnArpLengthReset")];
				
const sldrpckArp = [Content.getComponent("sldrpckArpNotes"),
					Content.getComponent("sldrpckArpVelocity"),
					Content.getComponent("sldrpckArpLength")];
					
/* Move */

const pnlMove = Content.getComponent("pnlMove");

const knbMove = [Content.getComponent("knbMoveAHDSRAAttack"),
				 Content.getComponent("knbMoveAHDSRADecay"),
				 Content.getComponent("knbMoveAHDSRASustain"),
				 Content.getComponent("knbMoveAHDSRARelease"),
				 Content.getComponent("knbMoveAHDSRBAttack"),
				 Content.getComponent("knbMoveAHDSRBDecay"),
				 Content.getComponent("knbMoveAHDSRBSustain"),
				 Content.getComponent("knbMoveAHDSRBRelease"),
				 Content.getComponent("knbMoveChaosRate"),
				 Content.getComponent("knbMoveChaosIntensity")];
				 
const pnlMoveXYPad = Content.getComponent("pnlMoveXYPad");

const knbMoveX = Content.getComponent("knbMoveX");
const knbMoveY = Content.getComponent("knbMoveY");
				 
const lblMove = [Content.getComponent("lblMoveAHDSRAAttackValue"),
				 Content.getComponent("lblMoveAHDSRADecayValue"),
				 Content.getComponent("lblMoveAHDSRASustainValue"),
				 Content.getComponent("lblMoveAHDSRAReleaseValue"),
				 Content.getComponent("lblMoveAHDSRBAttackValue"),
				 Content.getComponent("lblMoveAHDSRBDecayValue"),
				 Content.getComponent("lblMoveAHDSRBSustainValue"),
				 Content.getComponent("lblMoveAHDSRBReleaseValue"),
				 Content.getComponent("lblMoveChaosRateValue"),
				 Content.getComponent("lblMoveChaosIntensityValue")];
				 
const btnMove = [Content.getComponent("btnMoveConnectionSettings"),
				 Content.getComponent("btnMoveChaosBypass"),
				 Content.getComponent("btnMoveChaosTypeA"),
				 Content.getComponent("btnMoveChaosTypeB"),
				 Content.getComponent("btnMoveChaosTypeC"),
				 Content.getComponent("btnMoveChaosTypeD"),
				 Content.getComponent("btnMoveChaosTypeE"),
				 Content.getComponent("btnMoveChaosTypeF"),
				 Content.getComponent("btnMoveChaosTypeG")];
				 
const pnlMoveConnectionSettings = Content.getComponent("pnlMoveConnectionSettings");
const fltMacroControl = Content.getComponent("fltMacroControl");			

/* Random */

const pnlRandom = Content.getComponent("pnlRandom");	 

const btnRandomizeAll = Content.getComponent("btnRandomizeAll");
const btnRandomizeResetAll = Content.getComponent("btnRandomizeResetAll");

const btnRandomizeAllSamplers = [Content.getComponent("btnRandomizeAllSamplersAll"),
								 Content.getComponent("btnRandomizeAllSamplersSamplemap"),
								 Content.getComponent("btnRandomizeAllSamplersOffset"),
								 Content.getComponent("btnRandomizeAllSamplersReverse"),
								 Content.getComponent("btnRandomizeAllSamplersAHDSR"),
								 Content.getComponent("btnRandomizeAllSamplersAHDSRStaccato"),
								 Content.getComponent("btnRandomizeAllSamplersAHDSRSustain"),
								 Content.getComponent("btnRandomizeAllSamplersAHDSRPad"),
								 Content.getComponent("btnRandomizeAllSamplersPitchOctave"),
								 Content.getComponent("btnRandomizeAllSamplersPitch"),
								 Content.getComponent("btnRandomizeAllSamplersTuneUnisono"),
								 Content.getComponent("btnRandomizeAllSamplersTune"),
								 Content.getComponent("btnRandomizeAllSamplersPanNarrow"),
								 Content.getComponent("btnRandomizeAllSamplersPan"),
								 Content.getComponent("btnRandomizeAllSamplersGainLevel"),
								 Content.getComponent("btnRandomizeAllSamplersGain")];
                                
const btnRandomizeSamplerA = [Content.getComponent("btnRandomizeSamplerAAll"),
							  Content.getComponent("btnRandomizeSamplerASamplemap"),
							  Content.getComponent("btnRandomizeSamplerAOffset"),
							  Content.getComponent("btnRandomizeSamplerAReverse"),
							  Content.getComponent("btnRandomizeSamplerAAHDSR"),
							  Content.getComponent("btnRandomizeSamplerAAHDSRStaccato"),
							  Content.getComponent("btnRandomizeSamplerAAHDSRSustain"),
							  Content.getComponent("btnRandomizeSamplerAAHDSRPad"),
							  Content.getComponent("btnRandomizeSamplerAPitchOctave"),
							  Content.getComponent("btnRandomizeSamplerAPitch"),
							  Content.getComponent("btnRandomizeSamplerATuneUnisono"),
							  Content.getComponent("btnRandomizeSamplerATune"),
							  Content.getComponent("btnRandomizeSamplerAPanNarrow"),
							  Content.getComponent("btnRandomizeSamplerAPan"),
							  Content.getComponent("btnRandomizeSamplerAGainLevel"),
							  Content.getComponent("btnRandomizeSamplerAGain")];

const btnRandomizeSamplerB = [Content.getComponent("btnRandomizeSamplerBAll"),
							  Content.getComponent("btnRandomizeSamplerBSamplemap"),
							  Content.getComponent("btnRandomizeSamplerBOffset"),
							  Content.getComponent("btnRandomizeSamplerBReverse"),
							  Content.getComponent("btnRandomizeSamplerBAHDSR"),
							  Content.getComponent("btnRandomizeSamplerBAHDSRStaccato"),
							  Content.getComponent("btnRandomizeSamplerBAHDSRSustain"),
							  Content.getComponent("btnRandomizeSamplerBAHDSRPad"),
							  Content.getComponent("btnRandomizeSamplerBPitchOctave"),
							  Content.getComponent("btnRandomizeSamplerBPitch"),
							  Content.getComponent("btnRandomizeSamplerBTuneUnisono"),
							  Content.getComponent("btnRandomizeSamplerBTune"),
							  Content.getComponent("btnRandomizeSamplerBPanNarrow"),
							  Content.getComponent("btnRandomizeSamplerBPan"),
							  Content.getComponent("btnRandomizeSamplerBGainLevel"),
							  Content.getComponent("btnRandomizeSamplerBGain")];

const btnRandomizeSamplerC = [Content.getComponent("btnRandomizeSamplerCAll"),
							  Content.getComponent("btnRandomizeSamplerCSamplemap"),
							  Content.getComponent("btnRandomizeSamplerCOffset"),
							  Content.getComponent("btnRandomizeSamplerCReverse"),
							  Content.getComponent("btnRandomizeSamplerCAHDSR"),
							  Content.getComponent("btnRandomizeSamplerCAHDSRStaccato"),
							  Content.getComponent("btnRandomizeSamplerCAHDSRSustain"),
							  Content.getComponent("btnRandomizeSamplerCAHDSRPad"),
							  Content.getComponent("btnRandomizeSamplerCPitchOctave"),
							  Content.getComponent("btnRandomizeSamplerCPitch"),
							  Content.getComponent("btnRandomizeSamplerCTuneUnisono"),
							  Content.getComponent("btnRandomizeSamplerCTune"),
							  Content.getComponent("btnRandomizeSamplerCPanNarrow"),
							  Content.getComponent("btnRandomizeSamplerCPan"),
							  Content.getComponent("btnRandomizeSamplerCGainLevel"),
							  Content.getComponent("btnRandomizeSamplerCGain")];
                                  
const btnRandomizeSamplerOther = [Content.getComponent("btnRandomizeSamplerOtherAll"),
								  Content.getComponent("btnRandomizeSamplerOtherSamplemap"),
								  Content.getComponent("btnRandomizeSamplerOtherOffset"),
								  Content.getComponent("btnRandomizeSamplerOtherReverse"),
								  Content.getComponent("btnRandomizeSamplerOtherAHDSR"),
								  Content.getComponent("btnRandomizeSamplerOtherAHDSRStaccato"),
								  Content.getComponent("btnRandomizeSamplerOtherAHDSRSustain"),
								  Content.getComponent("btnRandomizeSamplerOtherAHDSRPad"),
								  Content.getComponent("btnRandomizeSamplerOtherPitchOctave"),
								  Content.getComponent("btnRandomizeSamplerOtherPitch"),
								  Content.getComponent("btnRandomizeSamplerOtherTuneUnisono"),
								  Content.getComponent("btnRandomizeSamplerOtherTune"),
								  Content.getComponent("btnRandomizeSamplerOtherPanNarrow"),
								  Content.getComponent("btnRandomizeSamplerOtherPan"),
								  Content.getComponent("btnRandomizeSamplerOtherGainLevel"),
								  Content.getComponent("btnRandomizeSamplerOtherGain")];
                                  
const btnRandomizeFX = [Content.getComponent("btnRandomizeFXAll"),
						Content.getComponent("btnRandomizeFXFilter"),
						Content.getComponent("btnRandomizeFXUtility"),
						Content.getComponent("btnRandomizeFXStutter"),
						Content.getComponent("btnRandomizeFXAmp"),
						Content.getComponent("btnRandomizeFXDrive"),
						Content.getComponent("btnRandomizeFXDegrade"),
						Content.getComponent("btnRandomizeFXPhaser"),
						Content.getComponent("btnRandomizeFXReverb"),
						Content.getComponent("btnRandomizeFXDelay")];

const btnRandomizeArp = [Content.getComponent("btnRandomizeArpAll"),
						 Content.getComponent("btnRandomizeArpSteps"),
						 Content.getComponent("btnRandomizeArpSpeed"),
						 Content.getComponent("btnRandomizeArpOctave"),
						 Content.getComponent("btnRandomizeArpSwing"),
						 Content.getComponent("btnRandomizeArpMode"),
						 Content.getComponent("btnRandomizeArpNotes"),
						 Content.getComponent("btnRandomizeArpMinor"),
						 Content.getComponent("btnRandomizeArpMajor"),
						 Content.getComponent("btnRandomizeArpVelocities"),
						 Content.getComponent("btnRandomizeArpLengths")];
                                  
const btnRandomizeMove = [Content.getComponent("btnRandomizeMoveAll"),
						  Content.getComponent("btnRandomizeMoveAHDSRA"),
						  Content.getComponent("btnRandomizeMoveAHDSRB"),
						  Content.getComponent("btnRandomizeMoveChaosType"),
						  Content.getComponent("btnRandomizeMoveChaosIntensity"),
						  Content.getComponent("btnRandomizeMoveChaosRate"),
						  Content.getComponent("btnRandomizeMoveConnections"),
						  Content.getComponent("btnRandomizeMoveConnectionRanges"),
						  Content.getComponent("btnRandomizeMoveConnectionClear")];                                  

// Assign LAF;

btnSamplerOther.setLocalLookAndFeel(LAFButtonSamplerOther);

// Knobs
for (k in knbSamplerA)
	k.setLocalLookAndFeel(LAFSliderNEAT);	
for (k in knbSamplerB)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbSamplerC)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbSamplerOther)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbFilter)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbAmp)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbDrive)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbUtility)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbStutter)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbDegrade)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbPhaser)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbReverb)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbDelay)
	k.setLocalLookAndFeel(LAFSliderNEAT);		
for (k in knbArp)
	k.setLocalLookAndFeel(LAFSliderNEAT);		
for (k in knbMove)
	k.setLocalLookAndFeel(LAFSliderNEAT);
knbMoveX.setLocalLookAndFeel(LAFSliderMoveX);
knbMoveY.setLocalLookAndFeel(LAFSliderMoveY);
btnMove[1].setLocalLookAndFeel(LAFButtonBypass);
btnMove[2].setLocalLookAndFeel(LAFButtonChaosA);
btnMove[3].setLocalLookAndFeel(LAFButtonChaosB);
btnMove[4].setLocalLookAndFeel(LAFButtonChaosC);
btnMove[5].setLocalLookAndFeel(LAFButtonChaosD);
btnMove[6].setLocalLookAndFeel(LAFButtonChaosE);
btnMove[7].setLocalLookAndFeel(LAFButtonChaosF);
btnMove[8].setLocalLookAndFeel(LAFButtonChaosG);

// ComboBoxes
for (c in cmbSampler)
	c.setLocalLookAndFeel(LAFComboBoxNEAT);
for (c in cmbAmp)
	c.setLocalLookAndFeel(LAFComboBoxNEAT);
for (c in cmbArp)
	c.setLocalLookAndFeel(LAFComboBoxNEAT);
	
// Buttons
btnClosePage.setLocalLookAndFeel(LAFButtonClose);
for (b in btnPage)
	b.setLocalLookAndFeel(LAFButtonChangePage);	
for (b in btnCmbPrev)
	b.setLocalLookAndFeel(LAFButtonPrev);	
for (b in btnCmbNext)
	b.setLocalLookAndFeel(LAFButtonNext);
for (b in btnSamplerBypass)
	b.setLocalLookAndFeel(LAFButtonBypass);
for (k in knbSamplerOffset)
	k.setLocalLookAndFeel(LAFSliderSampleOffset);
for (b in btnSamplerReverse)
	b.setLocalLookAndFeel(LAFButtonSamplerReverse);	
for (b in btnFXBypass)
	b.setLocalLookAndFeel(LAFButtonBypass);
for (b in btnFilter)
	b.setLocalLookAndFeel(LAFButtonNEAT);
for (b in btnAmp)
	b.setLocalLookAndFeel(LAFButtonNEAT);
for (b in btnDrive)
	b.setLocalLookAndFeel(LAFButtonNEAT);
for (b in btnStutter)
	b.setLocalLookAndFeel(LAFButtonNEAT);	
for (b in btnDelay)
	b.setLocalLookAndFeel(LAFButtonNEAT);	
for (b in btnArpBypass)
	b.setLocalLookAndFeel(LAFButtonBypass);
	
btnArp[0].setLocalLookAndFeel(LAFButtonArpMinor);
btnArp[1].setLocalLookAndFeel(LAFButtonArpMajor);
btnArp[2].setLocalLookAndFeel(LAFButtonArpReset);
btnArp[3].setLocalLookAndFeel(LAFButtonArpInvert);
btnArp[4].setLocalLookAndFeel(LAFButtonArpReset);
btnArp[5].setLocalLookAndFeel(LAFButtonArpReset);

btnMove[0].setLocalLookAndFeel(LAFButtonNEAT);

btnRandomizeAll.setLocalLookAndFeel(LAFButtonNEAT);
btnRandomizeResetAll.setLocalLookAndFeel(LAFButtonNEAT);

for (b in btnRandomizeAllSamplers)
	b.setLocalLookAndFeel(LAFButtonNEAT);
for (b in btnRandomizeSamplerA)
	b.setLocalLookAndFeel(LAFButtonNEAT);		
for (b in btnRandomizeSamplerB)
	b.setLocalLookAndFeel(LAFButtonNEAT);			
for (b in btnRandomizeSamplerC)
	b.setLocalLookAndFeel(LAFButtonNEAT);			
for (b in btnRandomizeSamplerOther)
	b.setLocalLookAndFeel(LAFButtonNEAT);			
for (b in btnRandomizeFX)
	b.setLocalLookAndFeel(LAFButtonNEAT);			
for (b in btnRandomizeArp)
	b.setLocalLookAndFeel(LAFButtonNEAT);			
for (b in btnRandomizeMove)
	b.setLocalLookAndFeel(LAFButtonNEAT);			
	

// Sliderpacks

sldrpckArp[0].setLocalLookAndFeel(LAFSliderpackArpNotes);
sldrpckArp[1].setLocalLookAndFeel(LAFSliderpackArpOther);
sldrpckArp[2].setLocalLookAndFeel(LAFSliderpackArpOther);
	
// Keyboard & Key Colours
Footer.fltKeyboard.setLocalLookAndFeel(LAFKeyboard);
	
// Panels

// Paint Routines

// Main Body Panel
pnlBody.setPaintRoutine(function(g)
{
	this.loadImage("{PROJECT_FOLDER}background.jpg", "backgroundImage");
	g.setOpacity(1.0);
	g.drawImage("backgroundImage", [0, 0, this.getWidth(), this.getHeight()], 0, 0);	
});

// Sampler
for (p in pnlSampler)
{
	if (p == pnlSampler[3])
	{
		p.setPaintRoutine(function(g)
		{		
			g.setColour(clrExtradarkblue);
			g.fillRoundedRectangle([0, 0, this.getWidth(), this.getHeight()], 10.0);			
			var noiseData = {
					"alpha" : .1,
					"monochromatic" : false,
					"scaleFactor" : 2,
					"area" : [0, 0, this.getWidth(), this.getHeight()]		
				};				
			g.addNoise(noiseData);
		});
	}
	else
	{
		p.setPaintRoutine(function(g)
		{		
			g.setColour(clrRhapsodyBlue);
			g.fillRoundedRectangle([0, 0, this.getWidth(), this.getHeight()], 10.0);			
			var noiseData = {
					"alpha" : .1,
					"monochromatic" : false,
					"scaleFactor" : 2,
					"area" : [0, 0, this.getWidth(), this.getHeight()]		
				};				
			g.addNoise(noiseData);
		});
	}	
}

// FX
pnlFX.setPaintRoutine(function(g)
{
	var w = this.getWidth();
	var h = this.getHeight();
	g.setColour(clrRhapsodyBlue);
});

for (p in pnlFXChildren)
{
	p.setPaintRoutine(function(g)
	{
		var w = this.getWidth();
		var h = this.getHeight();		
		g.setColour(Colours.withAlpha(clrRhapsodyBlue, 1.0));
		g.fillRoundedRectangle([0, 0, w, h], 10.0);		
		var noiseData = {
					"alpha" : .1,
					"monochromatic" : false,
					"scaleFactor" : 2,
					"area" : [0, 0, this.getWidth(), this.getHeight()]		
				};				
		g.addNoise(noiseData);
	});
}

// Arp
pnlArp.setPaintRoutine(function(g)
{
	var w = this.getWidth();
	var h = this.getHeight();	
	g.setColour(Colours.withAlpha(clrRhapsodyBlue, 1.0));
	g.fillRoundedRectangle([0, 0, w, h], 10.0);
	var noiseData = {
				"alpha" : .1,
				"monochromatic" : false,
				"scaleFactor" : 2,
				"area" : [0, 0, this.getWidth(), this.getHeight()]		
			};			
	g.addNoise(noiseData);	
});

// Move
pnlMove.setPaintRoutine(function(g)
{
	var w = this.getWidth();
	var h = this.getHeight();	
	g.setColour(Colours.withAlpha(clrRhapsodyBlue, 1.0));
	g.fillRoundedRectangle([0, 0, w, h], 10.0);	
	var noiseData = {
				"alpha" : .1,
				"monochromatic" : false,
				"scaleFactor" : 2,
				"area" : [0, 0, this.getWidth(), this.getHeight()]		
			};			
	g.addNoise(noiseData);
});

pnlMoveXYPad.setPaintRoutine(function(g)
{
	xPos = Math.range(knbMoveX.getValue() / 100, 0.03, 0.97); 
	yPos = Math.range(1-knbMoveY.getValue() / 100, 0.03, 0.97);
	g.setColour(Colours.withAlpha(clrExtradarkgrey, .35));
	g.fillRoundedRectangle([0, 0, this.getWidth(), this.getHeight()], 8.0);
   	g.setColour(Colours.withAlpha(clrGrey, .2));
   	g.drawRoundedRectangle([0, 0, this.getWidth(), this.getHeight()], 8.0, 1.0);	    	
   	//Cursor	
	g.setColour(clrDarkgrey);
	g.fillEllipse([this.getWidth() * xPos -5, this.getHeight() * yPos - 5, 10, 10]);
	g.setColour(clrGrey);
	g.drawEllipse([this.getWidth() * xPos -5, this.getHeight() * yPos - 5, 10, 10], 1.0); 	
});

pnlMoveConnectionSettings.setPaintRoutine(function(g)
{
	var w = this.getWidth();
	var h = this.getHeight();	
	g.setColour(Colours.withAlpha(clrExtradarkgrey, 1.0));
	g.fillRoundedRectangle([0, 0, w, h], 10.0);
	g.setColour(Colours.withAlpha(clrLightgrey, .2));
	g.drawRoundedRectangle([0, 0, w, h], 10.0, 1.0);	
	var noiseData = {
				"alpha" : .1,
				"monochromatic" : false,
				"scaleFactor" : 2,
				"area" : [0, 0, this.getWidth(), this.getHeight()]		
			};			
	g.addNoise(noiseData);
});


// Random
pnlRandom.setPaintRoutine(function(g)
{
	var w = this.getWidth();
	var h = this.getHeight();	
	g.setColour(Colours.withAlpha(clrRhapsodyBlue, 1.0));
	g.fillRoundedRectangle([0, 0, w, h], 10.0);	
	var noiseData = {
				"alpha" : .1,
				"monochromatic" : false,
				"scaleFactor" : 2,
				"area" : [0, 0, this.getWidth(), this.getHeight()]		
			};			
	g.addNoise(noiseData);
});