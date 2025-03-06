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

include("NEATBoilerplate/NEATLookAndFeel.js");
include("NEATBoilerplate/NEATModules.js");
include("NEATBoilerplate/NEATUIConstructors.js");




// Register UI Elements

const btnPages = [Content.getComponent("btnSamplePage"), Content.getComponent("btnFXPage"), Content.getComponent("btnArpPage"), Content.getComponent("btnMovePage"), Content.getComponent("btnRandomPage")]

for (b in btnPages)
	b.setLocalLookAndFeel(LAFButtonChangePage);

const pnlBodyW = pnlBody.getWidth();
const pnlBodyH = pnlBody.getHeight();

const pnlSamplers = [Content.getComponent("pnlSamplerA"), Content.getComponent("pnlSamplerB"), Content.getComponent("pnlSamplerC")];

const cmbSamplerA = Content.getComponent("cmbSamplerA");

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
						 						  									
					
/*
// temp positioning labels
for (i=0; i<lblSamplerA.length; i++)
{
	lblSamplerA[i].set("x", knbSamplerA[i].get("x") - 11);
	lblSamplerAValue[i].set("x", knbSamplerA[i].get("x") - 11);
	
	lblSamplerA[i].set("y", knbSamplerA[i].get("y") + knbSamplerA[i].getHeight() + 4);
	lblSamplerAValue[i].set("y", knbSamplerA[i].get("y") + knbSamplerA[i].getHeight() +23);
	
	lblSamplerB[i].set("x", knbSamplerB[i].get("x") - 11);
	lblSamplerBValue[i].set("x", knbSamplerB[i].get("x") - 11);
	
	lblSamplerB[i].set("y", knbSamplerB[i].get("y") + knbSamplerB[i].getHeight() + 4);
	lblSamplerBValue[i].set("y", knbSamplerB[i].get("y") + knbSamplerB[i].getHeight() +23);
	
	lblSamplerC[i].set("x", knbSamplerC[i].get("x") - 11);
	lblSamplerCValue[i].set("x", knbSamplerC[i].get("x") - 11);
	
	lblSamplerC[i].set("y", knbSamplerC[i].get("y") + knbSamplerC[i].getHeight() + 4);
	lblSamplerCValue[i].set("y", knbSamplerC[i].get("y") + knbSamplerC[i].getHeight() +23);
}
*/



// Paint Routines


for (p in pnlSamplers)
{
	p.setPaintRoutine(function(g)
	{
		var gradientData = [pnlBodyColourTop, 0, 0, pnlBodyColour, 0, this.getHeight(), false];
		//g.setGradientFill(gradientData);
		
		g.setColour(clrRhapsodyBlue);
		g.fillRoundedRectangle([0, 0, this.getWidth(), this.getHeight()], 10.0);
		
		var noiseData = {
				"alpha" : .1,
				"monochromatic" : false,
				"scaleFactor" : 2,
				"area" : [0, 13, this.getWidth(), this.getHeight() - 16]		
			};
			
		g.addNoise(noiseData);
	});
}

for (k in knbSamplerA)
	k.setLocalLookAndFeel(LAFSliderNEAT);	
for (k in knbSamplerB)
	k.setLocalLookAndFeel(LAFSliderNEAT);
for (k in knbSamplerC)
	k.setLocalLookAndFeel(LAFSliderNEAT);
	
cmbSamplerA.setLocalLookAndFeel(LAFComboBoxSampler);

/* UI Functionality */

inline function changePage(index)
{
	for (p in pnlSamplers)
		p.set("visible", false);
		
	// add other panels here
		
	for (i=0; i<btnPages.length; i++)
		if (i != index)
			btnPages[i].setValue(0);
}

inline function onbtnSamplePageControl(component, value)
{
	changePage(0);
	
	for (p in pnlSamplers)
		p.set("visible", value);
}



inline function onbtnFXPageControl(component, value)
{
	changePage(1);
}

inline function onbtnArpPageControl(component, value)
{
	changePage(2);
}

inline function onbtnMovePageControl(component, value)
{
	changePage(3);
}

inline function onbtnRandomPageControl(component, value)
{
	changePage(4);
}

btnPages[0].setControlCallback(onbtnSamplePageControl);
btnPages[1].setControlCallback(onbtnFXPageControl);
btnPages[2].setControlCallback(onbtnArpPageControl);
btnPages[3].setControlCallback(onbtnMovePageControl);
btnPages[4].setControlCallback(onbtnRandomPageControl);

/* Sample Page */

//Gain
inline function onknbSamplerGainControl(component, value)
{
	switch(component)
	{
		case knbSamplerA[7]:
		{
			utilities[0].setAttribute(utilities[0].Gain, value);
			lblSamplerAValue[7].set("text", Math.round(value) + "db");
		}
		case knbSamplerB[7]:
		{
			utilities[1].setAttribute(utilities[1].Gain, value);
			lblSamplerBValue[7].set("text", Math.round(value) + "db");
		}
		case knbSamplerC[7]:
		{
			utilities[2].setAttribute(utilities[2].Gain, value);
			lblSamplerCValue[7].set("text", Math.round(value) + "db");
		}
	}
}

knbSamplerA[7].setControlCallback(onknbSamplerGainControl);
knbSamplerB[7].setControlCallback(onknbSamplerGainControl);
knbSamplerC[7].setControlCallback(onknbSamplerGainControl);


//Pan

inline function onknbSamplerPanControl(component, value)
{
	switch(component)
	{
		case knbSamplerA[6]:
		{
			utilities[0].setAttribute(utilities[0].Balance, value);		
			if (value == 0)
			    lblSamplerAValue[6].set("text", "C");
			else if (value < 0)
			    lblSamplerAValue[6].set("text", Math.round(value) + "L");
			else
			    lblSamplerAValue[6].set("text", Math.round(value) + "R");
		}
		case knbSamplerB[6]:
		{
			utilities[1].setAttribute(utilities[1].Balance, value);
			if (value == 0)
			    lblSamplerBValue[6].set("text", "C");
			else if (value < 0)
			    lblSamplerBValue[6].set("text", Math.round(value) + "L");
			else
			    lblSamplerBValue[6].set("text", Math.round(value) + "R");
		}
		case knbSamplerC[6]:
		{
			utilities[2].setAttribute(utilities[2].Balance, value);
			if (value == 0)
			    lblSamplerCValue[6].set("text", "C");
			else if (value < 0)
			    lblSamplerCValue[6].set("text", Math.round(value) + "L");
			else
			    lblSamplerCValue[6].set("text", Math.round(value) + "R");
		}
	}
}

knbSamplerA[6].setControlCallback(onknbSamplerPanControl);
knbSamplerB[6].setControlCallback(onknbSamplerPanControl);
knbSamplerC[6].setControlCallback(onknbSamplerPanControl);

//Pitch

inline function onknbSamplerPitchControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[4]:
		{
			pitchMods[0].setIntensity(value);
			lblSamplerAValue[4].set("text", Math.round(value) + "st");
		}
		case knbSamplerB[4]:
		{
			pitchMods[1].setIntensity(value);
			lblSamplerBValue[4].set("text", Math.round(value) + "st");
		}
		case knbSamplerC[4]:
		{
			pitchMods[2].setIntensity(value);
			lblSamplerCValue[4].set("text", Math.round(value) + "st");
		}
	}
}

knbSamplerA[4].setControlCallback(onknbSamplerPitchControl);
knbSamplerB[4].setControlCallback(onknbSamplerPitchControl);
knbSamplerC[4].setControlCallback(onknbSamplerPitchControl);

// Tune
inline function onknbSamplerTuneControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[5]:
		{
			tuneMods[0].setIntensity(value / 100);
			lblSamplerAValue[5].set("text", Math.round(value) + "c");
		}
		case knbSamplerB[5]:
		{
			tuneMods[1].setIntensity(value / 100);
			lblSamplerBValue[5].set("text", Math.round(value) + "c");
		}
		case knbSamplerC[5]:
		{
			tuneMods[2].setIntensity(value / 100);
			lblSamplerCValue[5].set("text", Math.round(value) + "c");
		}
	}
}

knbSamplerA[5].setControlCallback(onknbSamplerTuneControl);
knbSamplerB[5].setControlCallback(onknbSamplerTuneControl);
knbSamplerC[5].setControlCallback(onknbSamplerTuneControl);


inline function onSlider_SamplerAPitchFineControl(component, value)
{
	Label_SamplerAPitchFineValue.set("text", Math.round(value) + "c");
	SamplerA_TuneMod.setIntensity(value / 100);
};



//Audio WaveForm

//Sample Selection A


inline function onComboBox_SamplerAControl(component, value)
{
    if (libraryHandler.currentExpansion == "Aetheric")
    {
        SamplerA.asSampler().loadSampleMap("{EXP::Aetheric}Aetheric_SampleMap" + Math.round(value));
    } 
};

// Sample Start Offset A

inline function onSlider_SampleOffsetAControl(component, value)
{
	SamplerA_SampleStart.setIntensity(1-value);
};

// ADSR 

inline function onSlider_SamplerAAttackControl(component, value)
{
	SamplerA_AHDSR.setAttribute(SamplerA_AHDSR.Attack, value);
	Label_SamplerAAttackValue.set("text", Math.round(value) + "ms");
};

inline function onSlider_SamplerADecayControl(component, value)
{
	SamplerA_AHDSR.setAttribute(SamplerA_AHDSR.Decay, value);
	Label_SamplerADecayValue.set("text", Math.round(value) + "ms");
};

inline function onSlider_SamplerASustainControl(component, value)
{
	SamplerA_AHDSR.setAttribute(SamplerA_AHDSR.Sustain, value);
	Label_SamplerASustainValue.set("text", Math.round(value) + "dB");
};

inline function onSlider_SamplerAReleaseControl(component, value)
{
	SamplerA_AHDSR.setAttribute(SamplerA_AHDSR.Release, value);
	Label_SamplerAReleaseValue.set("text", Math.round(value) + "ms");
};

//Reverse Sample Switch


inline function onButton_SamplerAReverseControl(component, value)
{
	SamplerA.setAttribute(SamplerA.Reversed, value);
};

//knbSamplerA.setControlCallback();

/* Rhapsody Stuff */

// Rhapsody Gain
inline function onknbMasterGainControl(component, value)
{
	/* might cause issues */
	if (isDefined(rhapsodyModules[0]))
		rhapsodyModules[0].setAttribute(rhapsodyModules[0].Gain, value);
}

// Rhapsody Pan
inline function onknbMasterPanControl(component, value)
{
	/* might cause issues */
	if (isDefined(rhapsodyModules[0]))
		rhapsodyModules[0].setAttribute(rhapsodyModules[0].Balance, value);
}

Content.getComponent("knbMasterGain").setControlCallback(onknbMasterGainControl);
Content.getComponent("knbMasterPan").setControlCallback(onknbMasterPanControl);

/* Key Colours */

for (i = 24; i < 89; i++)
   	Engine.setKeyColour(i, Colours.withAlpha(Colours.lightblue, 1.0));

for (i=89; i<100; i++)   	
	Engine.setKeyColour(i, Colours.withAlpha(Colours.lightgreen, 1.0));
	
	
	