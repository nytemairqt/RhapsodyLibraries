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

include("NEATBoilerplate/includes/NEATLookAndFeel.js");
include("NEATBoilerplate/includes/NEATModules.js");
include("NEATBoilerplate/includes/NEATUiConstructors.js");
include("NEATBoilerplate/includes/NEATUiRefs.js");
						 						  									
/* UI Functionality */

inline function changePage(index)
{
	for (p in pnlSampler)
		p.set("visible", false);
		
	// add other panels here
		
	for (i=0; i<btnPage.length; i++)
		if (i != index)
			btnPage[i].setValue(0);
}

// Change Page
inline function onbtnChangePageControl(component, value)
{
	switch(component)
	{
		case btnPage[0]:
		{
			changePage(0);
			for (p in pnlSampler)
				p.set("visible", value);
		}
		case btnPage[1]:
		{
			changePage(1);
		}
		case btnPage[2]:
		{
			changePage(2);
		}
		case btnPage[3]:
		{
			changePage(3);
		}
		case btnPage[4]:
		{
			changePage(5);
		}		
	}
}

for (b in btnPage)
	b.setControlCallback(onbtnChangePageControl);

/* Sample Page */

// Attack
inline function onknbSamplerAttackControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[0]:
		{
			ahdsrs[0].setAttribute(ahdsrs[0].Attack, value);
			lblSamplerAValue[0].set("text", Math.round(value) + "ms");
		}
		case knbSamplerB[0]:
		{
			ahdsrs[1].setAttribute(ahdsrs[1].Attack, value);
			lblSamplerBValue[0].set("text", Math.round(value) + "ms");
		}
		case knbSamplerC[0]:
		{
			ahdsrs[2].setAttribute(ahdsrs[2].Attack, value);
			lblSamplerCValue[0].set("text", Math.round(value) + "ms");
		}
	}
}

knbSamplerA[0].setControlCallback(onknbSamplerAttackControl);
knbSamplerB[0].setControlCallback(onknbSamplerAttackControl);
knbSamplerC[0].setControlCallback(onknbSamplerAttackControl);

// Decay
inline function onknbSamplerDecayControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[1]:
		{
			ahdsrs[0].setAttribute(ahdsrs[0].Decay, value);
			lblSamplerAValue[1].set("text", Math.round(value) + "ms");
		}
		case knbSamplerB[1]:
		{
			ahdsrs[1].setAttribute(ahdsrs[1].Decay, value);
			lblSamplerBValue[1].set("text", Math.round(value) + "ms");
		}
		case knbSamplerC[1]:
		{
			ahdsrs[2].setAttribute(ahdsrs[2].Decay, value);
			lblSamplerCValue[1].set("text", Math.round(value) + "ms");
		}
	}
}

knbSamplerA[1].setControlCallback(onknbSamplerDecayControl);
knbSamplerB[1].setControlCallback(onknbSamplerDecayControl);
knbSamplerC[1].setControlCallback(onknbSamplerDecayControl);

// Sustain
inline function onknbSamplerSustainControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[2]:
		{
			ahdsrs[0].setAttribute(ahdsrs[0].Sustain, value);
			lblSamplerAValue[2].set("text", Math.round(value) + "dB");
		}
		case knbSamplerB[2]:
		{
			ahdsrs[1].setAttribute(ahdsrs[1].Sustain, value);
			lblSamplerBValue[2].set("text", Math.round(value) + "dB");
		}
		case knbSamplerC[2]:
		{
			ahdsrs[2].setAttribute(ahdsrs[2].Sustain, value);
			lblSamplerCValue[2].set("text", Math.round(value) + "dB");
		}
	}
}

knbSamplerA[2].setControlCallback(onknbSamplerSustainControl);
knbSamplerB[2].setControlCallback(onknbSamplerSustainControl);
knbSamplerC[2].setControlCallback(onknbSamplerSustainControl);

// Release
inline function onknbSamplerReleaseControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[3]:
		{
			ahdsrs[0].setAttribute(ahdsrs[0].Release, value);
			lblSamplerAValue[3].set("text", Math.round(value) + "ms");
		}
		case knbSamplerB[3]:
		{
			ahdsrs[1].setAttribute(ahdsrs[1].Release, value);
			lblSamplerBValue[3].set("text", Math.round(value) + "ms");
		}
		case knbSamplerC[3]:
		{
			ahdsrs[2].setAttribute(ahdsrs[2].Release, value);
			lblSamplerCValue[3].set("text", Math.round(value) + "ms");
		}
	}
}

knbSamplerA[3].setControlCallback(onknbSamplerReleaseControl);
knbSamplerB[3].setControlCallback(onknbSamplerReleaseControl);
knbSamplerC[3].setControlCallback(onknbSamplerReleaseControl);

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
	
// Paint Routines
for (p in pnlSampler)
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

for (c in cmbSampler)
	c.setLocalLookAndFeel(LAFComboBoxSampler);

/* Key Colours */

for (i = 24; i < 89; i++)
   	Engine.setKeyColour(i, Colours.withAlpha(Colours.lightblue, 1.0));

for (i=89; i<100; i++)   	
	Engine.setKeyColour(i, Colours.withAlpha(Colours.lightgreen, 1.0));