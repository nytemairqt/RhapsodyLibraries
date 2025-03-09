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

// Generic

inline function onBtnCmbPrevControl(component, value)
{
	// will include all combobox increment functions
	
	if (value)	
		switch (component)
		{
			case btnCmbPrev[0]:
			{
				if (cmbSampler[0].getValue() > cmbSampler[0].get("min"))
					cmbSampler[0].setValue(cmbSampler[0].getValue() - 1);
				else
					cmbSampler[0].setValue(cmbSampler[0].get("max"));
				cmbSampler[0].changed();
			}
			case btnCmbPrev[1]:
			{
				if (cmbSampler[1].getValue() > cmbSampler[1].get("min"))
					cmbSampler[1].setValue(cmbSampler[1].getValue() - 1);
				else
					cmbSampler[1].setValue(cmbSampler[1].get("max"));
				cmbSampler[1].changed();
			}
			case btnCmbPrev[2]:
			{
				if (cmbSampler[2].getValue() > cmbSampler[2].get("min"))
					cmbSampler[2].setValue(cmbSampler[2].getValue() - 1);
				else
					cmbSampler[2].setValue(cmbSampler[2].get("max"));
				cmbSampler[2].changed();
			}
			case btnCmbPrev[3]:
			{
				if (cmbSampler[3].getValue() > cmbSampler[3].get("min"))
					cmbSampler[3].setValue(cmbSampler[3].getValue() - 1);
				else
					cmbSampler[3].setValue(cmbSampler[3].get("max"));
				cmbSampler[3].changed();
			}
		}
}

inline function onBtnCmbNextControl(component, value)
{
	// will include all combobox increment functions
	
	if (value)	
		switch (component)
		{
			// Samplers
			case btnCmbNext[0]:
			{
				if (cmbSampler[0].getValue() < cmbSampler[0].get("max"))
					cmbSampler[0].setValue(cmbSampler[0].getValue() + 1);
				else
					cmbSampler[0].setValue(cmbSampler[0].get("min"));
				cmbSampler[0].changed();
			}
			case btnCmbNext[1]:
			{
				if (cmbSampler[1].getValue() < cmbSampler[1].get("max"))
					cmbSampler[1].setValue(cmbSampler[1].getValue() + 1);
				else
					cmbSampler[1].setValue(cmbSampler[1].get("min"));
				cmbSampler[1].changed();
			}
			case btnCmbNext[2]:
			{
				if (cmbSampler[2].getValue() < cmbSampler[2].get("max"))
					cmbSampler[2].setValue(cmbSampler[2].getValue() + 1);
				else
					cmbSampler[2].setValue(cmbSampler[2].get("min"));
				cmbSampler[2].changed();
			}
			case btnCmbNext[3]:
			{
				if (cmbSampler[3].getValue() < cmbSampler[3].get("max"))
					cmbSampler[3].setValue(cmbSampler[3].getValue() + 1);
				else
					cmbSampler[3].setValue(cmbSampler[3].get("min"));
				cmbSampler[3].changed();
			}	
		}
}

for (b in btnCmbPrev)
	b.setControlCallback(onBtnCmbPrevControl);
	
for (b in btnCmbNext)
	b.setControlCallback(onBtnCmbNextControl);

// Change Page
inline function changePage(index)
{
	for (p in pnlSampler)
		p.set("visible", false);
		
	// Hide & Reset Sampler Extra
	btnSamplerOther.setValue(0);
	btnSamplerOther.changed();
	btnSamplerOther.set("visible", false);
		
	// add other panels here
		
	for (i=0; i<btnPage.length; i++)
		if (i != index)
			btnPage[i].setValue(0);
}

inline function onbtnChangePageControl(component, value)
{
	switch(component)
	{
		case btnPage[0]:
		{
			changePage(0);
			btnSamplerOther.set("visible", value);
			for (i=0; i<pnlSampler.length; i++)
			{
				if (i < 3)
					pnlSampler[i].set("visible", value);
			}				
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

// Sampler Bypass
inline function onbtnSamplerBypassControl(component, value)
{
	switch (component)
	{
		case btnSamplerBypass[0]:
		{
			samplerA[0].setBypassed(1-value);
		}
		case btnSamplerBypass[1]:
		{
			samplerB[0].setBypassed(1-value);
		}
		case btnSamplerBypass[2]:
		{
			samplerC[0].setBypassed(1-value);
		}
		case btnSamplerBypass[3]: // Other
		{
			samplerOther[0].setBypassed(1-value);
		}
	}
}

for (b in btnSamplerBypass)
	b.setControlCallback(onbtnSamplerBypassControl);
	
inline function onbtnSamplerReverseControl(component, value)
{
	switch (component)
	{
		case btnSamplerReverse[0]:
		{
			samplerA[0].setAttribute(samplerA[0].Reversed, value);
		}
		case btnSamplerReverse[1]:
		{
			samplerB[0].setAttribute(samplerB[0].Reversed, value);
		}
		case btnSamplerReverse[2]:
		{
			samplerC[0].setAttribute(samplerC[0].Reversed, value);
		}
		case btnSamplerReverse[3]: // Other
		{
			samplerOther[0].setAttribute(samplerOther[0].Reversed, value);
		}
	}
}

for (b in btnSamplerReverse)
	b.setControlCallback(onbtnSamplerReverseControl);

// ComboBox
inline function oncmbSamplerControl(component, value)
{
	switch (component)
	{
		case cmbSampler[0]:
		{
			samplerA[0].asSampler().loadSampleMap("{PROJECT_FOLDER}Aetheric_SampleMap" + Math.round(value));
		}
		case cmbSampler[1]:
		{
			samplerB[0].asSampler().loadSampleMap("{PROJECT_FOLDER}Aetheric_SampleMap" + Math.round(value));
		}
		case cmbSampler[2]:
		{
			samplerC[0].asSampler().loadSampleMap("{PROJECT_FOLDER}Aetheric_SampleMap" + Math.round(value));
		}
		case cmbSampler[3]:
		{
			// Put other sampleMaps here if they exist
			samplerOther[0].asSampler().loadSampleMap("{PROJECT_FOLDER}AethericAmbiances_SampleMap");
		}
	}
}

for (c in cmbSampler)
	c.setControlCallback(oncmbSamplerControl);

// Sample Start Offset

inline function onknbSamplerOffsetControl(component, value)
{
	switch (component)
	{
		case knbSamplerOffset[0]:
		{			
			samplerA[8].setIntensity(1-value);
		}
		case knbSamplerOffset[1]:
		{
			samplerB[8].setIntensity(1-value);
		}
		case knbSamplerOffset[2]:
		{
			samplerC[8].setIntensity(1-value);
		}
		case knbSamplerOffset[3]:
		{
			samplerOther[8].setIntensity(1-value);
		}
	}
}

for (k in knbSamplerOffset)
	k.setControlCallback(onknbSamplerOffsetControl);

// Attack
inline function onknbSamplerAttackControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[0]:
		{
			samplerA[1].setAttribute(samplerA[1].Attack, value);
			lblSamplerAValue[0].set("text", Math.round(value) + "ms");
		}
		case knbSamplerB[0]:
		{
			samplerB[1].setAttribute(samplerB[1].Attack, value);
			lblSamplerBValue[0].set("text", Math.round(value) + "ms");
		}
		case knbSamplerC[0]:
		{
			samplerC[1].setAttribute(samplerC[1].Attack, value);
			lblSamplerCValue[0].set("text", Math.round(value) + "ms");
		}
		case knbSamplerOther[0]:
		{
			samplerOther[1].setAttribute(samplerOther[1].Attack, value);
			lblSamplerOtherValue[0].set("text", Math.round(value) + "ms");
		}
	}
}

knbSamplerA[0].setControlCallback(onknbSamplerAttackControl);
knbSamplerB[0].setControlCallback(onknbSamplerAttackControl);
knbSamplerC[0].setControlCallback(onknbSamplerAttackControl);
knbSamplerOther[0].setControlCallback(onknbSamplerAttackControl);

// Decay
inline function onknbSamplerDecayControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[1]:
		{
			samplerA[1].setAttribute(samplerA[1].Decay, value);
			lblSamplerAValue[1].set("text", Math.round(value) + "ms");
		}
		case knbSamplerB[1]:
		{
			samplerB[1].setAttribute(samplerB[1].Decay, value);
			lblSamplerBValue[1].set("text", Math.round(value) + "ms");
		}
		case knbSamplerC[1]:
		{
			samplerC[1].setAttribute(samplerC[1].Decay, value);
			lblSamplerCValue[1].set("text", Math.round(value) + "ms");
		}
		case knbSamplerOther[1]:
		{
			samplerOther[1].setAttribute(samplerOther[1].Decay, value);
			lblSamplerOtherValue[1].set("text", Math.round(value) + "ms");
		}
	}
}

knbSamplerA[1].setControlCallback(onknbSamplerDecayControl);
knbSamplerB[1].setControlCallback(onknbSamplerDecayControl);
knbSamplerC[1].setControlCallback(onknbSamplerDecayControl);
knbSamplerOther[1].setControlCallback(onknbSamplerDecayControl);

// Sustain
inline function onknbSamplerSustainControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[2]:
		{
			samplerA[1].setAttribute(samplerA[1].Sustain, value);
			lblSamplerAValue[2].set("text", Math.round(value) + "dB");
		}
		case knbSamplerB[2]:
		{
			samplerB[1].setAttribute(samplerB[1].Sustain, value);
			lblSamplerBValue[2].set("text", Math.round(value) + "dB");
		}
		case knbSamplerC[2]:
		{
			samplerC[1].setAttribute(samplerC[1].Sustain, value);
			lblSamplerCValue[2].set("text", Math.round(value) + "dB");
		}
		case knbSamplerOther[2]:
		{
			samplerOther[1].setAttribute(samplerOther[1].Sustain, value);
			lblSamplerOtherValue[2].set("text", Math.round(value) + "dB");
		}
	}
}

knbSamplerA[2].setControlCallback(onknbSamplerSustainControl);
knbSamplerB[2].setControlCallback(onknbSamplerSustainControl);
knbSamplerC[2].setControlCallback(onknbSamplerSustainControl);
knbSamplerOther[2].setControlCallback(onknbSamplerSustainControl);

// Release
inline function onknbSamplerReleaseControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[3]:
		{
			samplerA[1].setAttribute(samplerA[1].Release, value);
			lblSamplerAValue[3].set("text", Math.round(value) + "ms");
		}
		case knbSamplerB[3]:
		{
			samplerB[1].setAttribute(samplerB[1].Release, value);
			lblSamplerBValue[3].set("text", Math.round(value) + "ms");
		}
		case knbSamplerC[3]:
		{
			samplerC[1].setAttribute(samplerC[1].Release, value);
			lblSamplerCValue[3].set("text", Math.round(value) + "ms");
		}
		case knbSamplerOther[3]:
		{
			samplerOther[1].setAttribute(samplerOther[1].Release, value);
			lblSamplerOtherValue[3].set("text", Math.round(value) + "ms");
		}
	}
}

knbSamplerA[3].setControlCallback(onknbSamplerReleaseControl);
knbSamplerB[3].setControlCallback(onknbSamplerReleaseControl);
knbSamplerC[3].setControlCallback(onknbSamplerReleaseControl);
knbSamplerOther[3].setControlCallback(onknbSamplerReleaseControl);

//Pitch
inline function onknbSamplerPitchControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[4]:
		{
			samplerA[4].setIntensity(value);
			lblSamplerAValue[4].set("text", Math.round(value) + "st");
		}
		case knbSamplerB[4]:
		{
			samplerB[4].setIntensity(value);
			lblSamplerBValue[4].set("text", Math.round(value) + "st");
		}
		case knbSamplerC[4]:
		{
			samplerC[4].setIntensity(value);
			lblSamplerCValue[4].set("text", Math.round(value) + "st");
		}
		case knbSamplerOther[4]:
		{
			samplerOther[4].setIntensity(value);
			lblSamplerOtherValue[4].set("text", Math.round(value) + "st");
		}
	}
}

knbSamplerA[4].setControlCallback(onknbSamplerPitchControl);
knbSamplerB[4].setControlCallback(onknbSamplerPitchControl);
knbSamplerC[4].setControlCallback(onknbSamplerPitchControl);
knbSamplerOther[4].setControlCallback(onknbSamplerPitchControl);

// Tune
inline function onknbSamplerTuneControl(component, value)
{
	switch (component)
	{
		case knbSamplerA[5]:
		{
			samplerA[5].setIntensity(value / 100);
			lblSamplerAValue[5].set("text", Math.round(value) + "c");
		}
		case knbSamplerB[5]:
		{
			samplerB[5].setIntensity(value / 100);
			lblSamplerBValue[5].set("text", Math.round(value) + "c");
		}
		case knbSamplerC[5]:
		{
			samplerC[5].setIntensity(value / 100);
			lblSamplerCValue[5].set("text", Math.round(value) + "c");
		}
		case knbSamplerOther[5]:
		{
			samplerOther[5].setIntensity(value / 100);
			lblSamplerOtherValue[5].set("text", Math.round(value) + "c");
		}
	}
}

knbSamplerA[5].setControlCallback(onknbSamplerTuneControl);
knbSamplerB[5].setControlCallback(onknbSamplerTuneControl);
knbSamplerC[5].setControlCallback(onknbSamplerTuneControl);
knbSamplerOther[5].setControlCallback(onknbSamplerTuneControl);

//Pan
inline function onknbSamplerPanControl(component, value)
{
	switch(component)
	{
		case knbSamplerA[6]:
		{
			samplerA[7].setAttribute(samplerA[7].Balance, value);		
			if (value == 0)
			    lblSamplerAValue[6].set("text", "C");
			else if (value < 0)
			    lblSamplerAValue[6].set("text", Math.round(value) + "L");
			else
			    lblSamplerAValue[6].set("text", Math.round(value) + "R");
		}
		case knbSamplerB[6]:
		{
			samplerB[7].setAttribute(samplerB[7].Balance, value);
			if (value == 0)
			    lblSamplerBValue[6].set("text", "C");
			else if (value < 0)
			    lblSamplerBValue[6].set("text", Math.round(value) + "L");
			else
			    lblSamplerBValue[6].set("text", Math.round(value) + "R");
		}
		case knbSamplerC[6]:
		{
			samplerC[7].setAttribute(samplerC[7].Balance, value);
			if (value == 0)
			    lblSamplerCValue[6].set("text", "C");
			else if (value < 0)
			    lblSamplerCValue[6].set("text", Math.round(value) + "L");
			else
			    lblSamplerCValue[6].set("text", Math.round(value) + "R");
		}
		case knbSamplerOther[6]:
		{
			samplerOther[7].setAttribute(samplerOther[7].Balance, value);
			if (value == 0)
			    lblSamplerOtherValue[6].set("text", "C");
			else if (value < 0)
			    lblSamplerOtherValue[6].set("text", Math.round(value) + "L");
			else
			    lblSamplerOtherValue[6].set("text", Math.round(value) + "R");
		}
	}
}

knbSamplerA[6].setControlCallback(onknbSamplerPanControl);
knbSamplerB[6].setControlCallback(onknbSamplerPanControl);
knbSamplerC[6].setControlCallback(onknbSamplerPanControl);
knbSamplerOther[6].setControlCallback(onknbSamplerPanControl);

//Gain
inline function onknbSamplerGainControl(component, value)
{
	switch(component)
	{
		case knbSamplerA[7]:
		{
			samplerA[7].setAttribute(samplerA[7].Gain, value);
			lblSamplerAValue[7].set("text", Math.round(value) + "db");
		}
		case knbSamplerB[7]:
		{
			samplerB[7].setAttribute(samplerB[7].Gain, value);
			lblSamplerBValue[7].set("text", Math.round(value) + "db");
		}
		case knbSamplerC[7]:
		{
			samplerC[7].setAttribute(samplerC[7].Gain, value);
			lblSamplerCValue[7].set("text", Math.round(value) + "db");
		}
		case knbSamplerOther[7]:
		{
			samplerOther[7].setAttribute(samplerOther[7].Gain, value);
			lblSamplerOtherValue[7].set("text", Math.round(value) + "db");
		}
	}
}

knbSamplerA[7].setControlCallback(onknbSamplerGainControl);
knbSamplerB[7].setControlCallback(onknbSamplerGainControl);
knbSamplerC[7].setControlCallback(onknbSamplerGainControl);
knbSamplerOther[7].setControlCallback(onknbSamplerGainControl);

// Sampler Extra
inline function onbtnSamplerOtherControl(component, value)
{
	pnlSampler[3].set("visible", value);
};

btnSamplerOther.setControlCallback(onbtnSamplerOtherControl);

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


	

