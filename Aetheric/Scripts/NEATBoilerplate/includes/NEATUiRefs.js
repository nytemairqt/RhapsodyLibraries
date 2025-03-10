/*
    Copyright 2023, 2024 iamlamprey

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

const btnPage = [Content.getComponent("btnSamplePage"),
				  Content.getComponent("btnFXPage"),
				  Content.getComponent("btnArpPage"),
				  Content.getComponent("btnMovePage"),
				  Content.getComponent("btnRandomPage")];
				  
const btnCmbPrev = [Content.getComponent("btnCmbSamplerAPrev"),
					Content.getComponent("btnCmbSamplerBPrev"),
					Content.getComponent("btnCmbSamplerCPrev"),
					Content.getComponent("btnCmbSamplerOtherPrev")];
					
const btnCmbNext = [Content.getComponent("btnCmbSamplerANext"),
					Content.getComponent("btnCmbSamplerBNext"),
					Content.getComponent("btnCmbSamplerCNext"),
					Content.getComponent("btnCmbSamplerOtherNext")];				  

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
				  
const lblDrive = [Content.getComponent("lblDriveWaveshaper"),
				  Content.getComponent("lblDriveTube")];
				  
const btnDrive = [Content.getComponent("btnDriveWaveshaperOversampling"),
                  Content.getComponent("btnDriveTubeOversampling")];

// Utility & Stutter
const knbUtility = [Content.getComponent("knbUtilityWidth"),
                    Content.getComponent("knbUtilityGain")];
                    
const lblUtility = [Content.getComponent("lblUtilityGainValue"),
                    Content.getComponent("lblUtilityWidthValue")];
                    
const knbStutter = [Content.getComponent("knbStutterRate"),
                    Content.getComponent("knbStutterAmount")];
                    
const lblStutter = [Content.getComponent("lblStutterRateValue"),
                    Content.getComponent("lblStutterAmountValue")];
                    
const btnStutter = [Content.getComponent("btnStutterPreFX"),
                    Content.getComponent("btnStutterTempoSync")];

// Degrade
const knbDegrade = [Content.getComponent("knbDegradeBitDepth"),
                    Content.getComponent("knbDegradeSampleHold")];

const lblDegrade = [Content.getComponent("lblDegradeSampleHoldValue"),
                    Content.getComponent("lblDegradeBitDepthValue")];


// Phaser
const knbPhaser = [Content.getComponent("knbPhaserRateA"),
                   Content.getComponent("knbPhaserRateB"),
                   Content.getComponent("knbPhaserFeedback"),
                   Content.getComponent("knbPhaserMix")];
                   
const lblPhaser = [Content.getComponent("lblPhaserRateAValue"),
                   Content.getComponent("lblPhaserRateBValue"),
                   Content.getComponent("lblPhaserFeedbackValue"),
                   Content.getComponent("lblPhaserMixValue")];
                   
const btnPhaser = [Content.getComponent("btnPhaserLinkLR")];

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

// ComboBoxes
for (c in cmbSampler)
	c.setLocalLookAndFeel(LAFComboBoxNEAT);
for (c in cmbAmp)
	c.setLocalLookAndFeel(LAFComboBoxNEAT);
	
// Buttons
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
for (b in btnPhaser)
	b.setLocalLookAndFeel(LAFButtonNEAT);	
for (b in btnDelay)
	b.setLocalLookAndFeel(LAFButtonNEAT);	
	
// Panels

// Paint Routines
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

pnlFX.setPaintRoutine(function(g)
{
	var w = this.getWidth();
	var h = this.getHeight();

	g.setColour(clrRhapsodyBlue);
	//g.setColour(Colours.withAlpha(clrRhapsodyBlue, 0.0));
	//g.fillRoundedRectangle([0, 0, this.getWidth(), this.getHeight()], 10.0);
	
	g.drawRoundedRectangle([0, 0, w, h], 2.0, 1.0);
	
	var noiseData = {
			"alpha" : .1,
			"monochromatic" : false,
			"scaleFactor" : 2,
			"area" : [0, 0, this.getWidth(), this.getHeight()]		
		};
		
	//g.addNoise(noiseData);
});

for (p in pnlFXChildren)
{
	p.setPaintRoutine(function(g)
	{
		var w = this.getWidth();
		var h = this.getHeight();
		
		g.setColour(Colours.withAlpha(clrRhapsodyBlue, 1.0));
		g.fillRoundedRectangle([0, 0, w, h], 10.0);

		//g.setColour(Colours.withAlpha(clrLightgrey, 0.3));
		//g.drawRoundedRectangle([0, 0, w, h], 16.0, 1.0);
		
		var noiseData = {
					"alpha" : .1,
					"monochromatic" : false,
					"scaleFactor" : 2,
					"area" : [0, 0, this.getWidth(), this.getHeight()]		
				};
				
		g.addNoise(noiseData);
	});
}