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
Engine.loadAudioFilesIntoPool();
const syncTimes = ["1/1", "1/2D", "1/2", "1/2T", "1/4D", "1/4", "1/4T", "1/8D", "1/8", "1/8T", "1/16D", "1/16", "1/16T", "1/32D", "1/32", "1/32T", "1/64D", "1/64", "1/64T"];
const audioFiles = FileSystem.getFolder(FileSystem.AudioFiles);
const majorNotes = [0, 2, 4, 5, 7, 9, 11, 12];
const minorNotes = [0, 2, 3, 5, 7, 8, 10, 12];

// Generic

inline function onBtnCmbPrevControl(component, value)
{
	// Contains ALL prev buttons

	if (value)	
		switch (component)
		{
			case btnCmbPrev[0]: // Sampler A
			{
				if (cmbSampler[0].getValue() > cmbSampler[0].get("min"))
					cmbSampler[0].setValue(cmbSampler[0].getValue() - 1);
				else
					cmbSampler[0].setValue(cmbSampler[0].get("max"));
				cmbSampler[0].changed();
			}
			case btnCmbPrev[1]: // Sampler B
			{
				if (cmbSampler[1].getValue() > cmbSampler[1].get("min"))
					cmbSampler[1].setValue(cmbSampler[1].getValue() - 1);
				else
					cmbSampler[1].setValue(cmbSampler[1].get("max"));
				cmbSampler[1].changed();
			}
			case btnCmbPrev[2]: // Sampler C
			{
				if (cmbSampler[2].getValue() > cmbSampler[2].get("min"))
					cmbSampler[2].setValue(cmbSampler[2].getValue() - 1);
				else
					cmbSampler[2].setValue(cmbSampler[2].get("max"));
				cmbSampler[2].changed();
			}
			case btnCmbPrev[3]: // Sampler Other
			{
				if (cmbSampler[3].getValue() > cmbSampler[3].get("min"))
					cmbSampler[3].setValue(cmbSampler[3].getValue() - 1);
				else
					cmbSampler[3].setValue(cmbSampler[3].get("max"));
				cmbSampler[3].changed();
			}
			case btnCmbPrev[4]: // Amp Cab Select
			{
				if (cmbAmp[0].getValue() > cmbAmp[0].get("min"))
					cmbAmp[0].setValue(cmbAmp[0].getValue() - 1);
				else
					cmbAmp[0].setValue(cmbAmp[0].get("max"));
				cmbAmp[0].changed();
			}
			case btnCmbPrev[5]: // Arp Mode
			{
				if (cmbArp[0].getValue() > cmbArp[0].get("min"))
					cmbArp[0].setValue(cmbArp[0].getValue() - 1);
				else
					cmbArp[0].setValue(cmbArp[0].get("max"));
				cmbArp[0].changed();
			}
		}
}

inline function onBtnCmbNextControl(component, value)
{
	// Contains ALL next buttons
	
	if (value)	
		switch (component)
		{
			case btnCmbNext[0]: // Sampler A
			{
				if (cmbSampler[0].getValue() < cmbSampler[0].get("max"))
					cmbSampler[0].setValue(cmbSampler[0].getValue() + 1);
				else
					cmbSampler[0].setValue(cmbSampler[0].get("min"));
				cmbSampler[0].changed();
			}
			case btnCmbNext[1]: // Sampler B
			{
				if (cmbSampler[1].getValue() < cmbSampler[1].get("max"))
					cmbSampler[1].setValue(cmbSampler[1].getValue() + 1);
				else
					cmbSampler[1].setValue(cmbSampler[1].get("min"));
				cmbSampler[1].changed();
			}
			case btnCmbNext[2]: // Sampler C
			{
				if (cmbSampler[2].getValue() < cmbSampler[2].get("max"))
					cmbSampler[2].setValue(cmbSampler[2].getValue() + 1);
				else
					cmbSampler[2].setValue(cmbSampler[2].get("min"));
				cmbSampler[2].changed();
			}
			case btnCmbNext[3]: // Sampler Other
			{
				if (cmbSampler[3].getValue() < cmbSampler[3].get("max"))
					cmbSampler[3].setValue(cmbSampler[3].getValue() + 1);
				else
					cmbSampler[3].setValue(cmbSampler[3].get("min"));
				cmbSampler[3].changed();
			}	
			case btnCmbNext[4]: // Amp Cab Select
			{
				if (cmbAmp[0].getValue() < cmbAmp[0].get("max"))
					cmbAmp[0].setValue(cmbAmp[0].getValue() + 1);
				else
					cmbAmp[0].setValue(cmbAmp[0].get("min"));
				cmbAmp[0].changed();
			}
			case btnCmbNext[5]: // Arp Mode
			{
				if (cmbArp[0].getValue() < cmbArp[0].get("max"))
					cmbArp[0].setValue(cmbArp[0].getValue() + 1);
				else
					cmbArp[0].setValue(cmbArp[0].get("min"));
				cmbArp[0].changed();
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
	
	pnlFX.set("visible", false);
	pnlArp.set("visible", false);
	pnlMove.set("visible", false);
		
	for (i=0; i<btnPage.length; i++)
		if (i != index)
			btnPage[i].setValue(0);
}

inline function onbtnChangePageControl(component, value)
{
	switch(component)
	{
		case btnPage[0]: // Sampler
		{
			changePage(0);
			btnSamplerOther.set("visible", value);
			for (i=0; i<pnlSampler.length; i++)
			{
				if (i < 3)
					pnlSampler[i].set("visible", value);
			}				
		}
		case btnPage[1]: // FX
		{
			changePage(1);
			pnlFX.set("visible", value);
		}
		case btnPage[2]: // Arp
		{
			changePage(2);
			pnlArp.set("visible", value);
		}
		case btnPage[3]:
		{
			changePage(3);
			pnlMove.set("visible", value);
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

/* FX */

// Generic
inline function onknbFXBypassControl(component, value)
{
	switch (component)
	{
		case btnFXBypass[0]: // Filter
		{
			filter[0].setBypassed(1-value);
		}
		case btnFXBypass[1]: // Amp
		{
			for (fx in amp)
				fx.setBypassed(1-value);
			btnAmp[0].setValue(value);
		}
		case btnFXBypass[2]: // Drive
		{
			for (fx in drive)
				fx.setBypassed(1-value);
		}
		case btnFXBypass[3]: // Degrade
		{
			degrade[0].setBypassed(1-value);
		}
		case btnFXBypass[4]: // Utility
		{
			utility[0].setBypassed(1-value);
		}
		case btnFXBypass[5]: // Stutter
		{
			stutter[0].setBypassed(1-value);	
			stutter[2].setBypassed(1-value);
		}				
		case btnFXBypass[6]: // Phaser
		{
			phaser[0].setBypassed(1-value);
		}
		case btnFXBypass[7]: // Reverb
		{
			reverb[0].setBypassed(1-value);
		}
		case btnFXBypass[8]: // Delay
		{
			delay[0].setBypassed(1-value);
		}
	}
}

for (b in btnFXBypass)
	b.setControlCallback(onknbFXBypassControl);

// Filter
inline function onknbFilterControl(component, value)
{
	switch (component)
	{
		case knbFilter[0]: // Freq
		{
			filter[0].setAttribute(filter[0].Frequency, value);
			lblFilter[0].set("text", Math.round(value) + "hz");
		}
		case knbFilter[1]: // Q
		{
			filter[0].setAttribute(filter[0].Q, value);
			lblFilter[1].set("text", Engine.doubleToString(value, 2));
		}
	}
}

for (k in knbFilter)
	k.setControlCallback(onknbFilterControl);
	
inline function onbtnFilterControl(component, value)
{
	switch (component)
	{
		case btnFilter[0]:
		{
			if (value)
				filter[0].setAttribute(filter[0].Mode, 7);
		}
		case btnFilter[1]:
		{
			if (value)
				filter[0].setAttribute(filter[0].Mode, 6);
		}
	}
}

for (b in btnFilter)
	b.setControlCallback(onbtnFilterControl);
	
// Amp

inline function onknbAmpControl(component, value)
{
	switch (component)
	{
		case knbAmp[0]: // gain
		{
			amp[1].setAttribute(amp[0].Gain, value);
			lblAmp[0].set("text", Math.round(value) + "dB");
		}
		case knbAmp[1]: // output
		{
			amp[1].setAttribute(amp[1].Output, value);			
			lblAmp[1].set("text", Math.round(value) + "dB");
		}
		case knbAmp[2]: // tone
		{
			amp[0].setAttribute(2 * amp[0].BandOffset + amp[0].Gain, 1-value); // Low
			amp[0].setAttribute(4 * amp[0].BandOffset + amp[0].Gain, 1-(value * .5)); // Mid
			amp[0].setAttribute(3 * amp[0].BandOffset + amp[0].Gain, value); // High
			lblAmp[2].set("text", Math.round(value) + "dB");
		}
	}
}

for (k in knbAmp)
	k.setControlCallback(onknbAmpControl);
	
inline function onbtnAmpControl(component, value)
{
	switch (component)
	{
		case btnAmp[0]: // cab bypass
		{
			if (btnFXBypass[1].getValue())
				amp[3].setBypassed(1-value);
			else
			{
				amp[3].setBypassed(1);
				btnAmp[0].setValue(0);
			}
		}
		case btnAmp[1]: // oversampling
		{
			amp[1].setAttribute(amp[1].Oversample, value);
		}
	}
}

for (b in btnAmp)
	b.setControlCallback(onbtnAmpControl);
	
// Populate cmbAmp

var cabs = FileSystem.findFiles(audioFiles, "*.wav", false);
cmbAmp[0].set("items", "");

for (c in cabs)
	cmbAmp[0].addItem(c.toString(1));	

inline function oncmbAmpControl(component, value)
{
	switch (component)
	{
		case cmbAmp[0]:
		{
			amp[3].setFile(cabs[value-1].toString(0));
		}
	}
}

for (c in cmbAmp)
	c.setControlCallback(oncmbAmpControl);
	
// WS & Tube Drive
inline function onknbDriveControl(component, value)
{
	switch (component)
	{
		case knbDrive[0]: // WS
		{
			drive[0].setAttribute(drive[0].Gain, value);
			lblDrive[0].set("text", Math.round(value) + "dB");
		}
		case knbDrive[1]: // tube
		{
			drive[1].setAttribute(drive[1].Gain, value);
			lblDrive[1].set("text", Math.round(value) + "dB");
		}
	}
}

for (k in knbDrive)
	k.setControlCallback(onknbDriveControl);
	
inline function onbtnDriveControl(component, value)
{
	switch (component)
	{
		case btnDrive[0]: // WS oversampling
		{
			if (value)
				drive[0].setAttribute(drive[0].Oversampling, 2);
			else
				drive[0].setAttribute(drive[0].Oversampling, 1);
		}
		case btnDrive[1]: // tube oversampling
		{
			drive[1].setAttribute(drive[1].Oversample, value);
		}
	}
}

for (b in btnDrive)
	b.setControlCallback(onbtnDriveControl);
	
// Utility & Stutter

inline function onknbUtilityControl(component, value)
{
	switch (component)
	{
		case knbUtility[0]: // width
		{
			utility[0].setAttribute(utility[0].Width, value);
			lblUtility[0].set("text", Math.round(value) + "%");
		}
		case knbUtility[1]: // gain
		{
			utility[0].setAttribute(utility[0].Gain, value);
			lblUtility[1].set("text", Math.round(value) + "dB");
		}
	}
}

for (k in knbUtility)
	k.setControlCallback(onknbUtilityControl);

inline function onknbStutterControl(component, value)
{
	switch (component)
	{
		case knbStutter[0]: // rate
		{
			stutter[1].setAttribute(stutter[1].Frequency, value);
			stutter[3].setAttribute(stutter[3].Frequency, value);

			if (btnStutter[1].getValue()) // sync switch
				lblStutter[0].set("text", syncTimes[value]);
			else
				lblStutter[0].set("text", Engine.doubleToString(value, 1) + "Hz");
		}
		case knbStutter[1]: // amount
		{
			stutter[1].setIntensity(value);
			stutter[3].setIntensity(value);
			lblStutter[1].set("text", Math.round(value * 100) + "%");			
		}
	}
}

for (k in knbStutter)
	k.setControlCallback(onknbStutterControl);
	
inline function onbtnStutterControl(component, value)
{
	switch (component)
	{
		case btnStutter[0]: // pre FX
		{
			stutter[1].setBypassed(1-value);
			stutter[3].setBypassed(value);
		}
		case btnStutter[1]: // sync
		{
			// need to set the knb settings here			
			if (value)
			{
				knbStutter[0].set("min", 0.0);
				knbStutter[0].set("max", 18.0);
				knbStutter[0].set("stepSize", 1.0);
				knbStutter[0].set("middlePosition", 9.0);
				knbStutter[0].set("defaultValue", 11.0);				
			}
			else
			{
				knbStutter[0].set("min", 0.5);
				knbStutter[0].set("max", 40.0);
				knbStutter[0].set("stepSize", 0.1);
				knbStutter[0].set("middlePosition", 10.0);
				knbStutter[0].set("defaultValue", 3.0);
			}
			knbStutter[0].setValue(knbStutter[0].get("defaultValue"));
			stutter[1].setAttribute(stutter[1].TempoSync, value);
			stutter[3].setAttribute(stutter[3].TempoSync, value);
			knbStutter[0].changed();
		}
	}
}

for (b in btnStutter)
	b.setControlCallback(onbtnStutterControl);
	
// Degrade

inline function onknbDegradeControl(component, value)
{
	switch (component)
	{
		case knbDegrade[0]:
		{
			degrade[0].setAttribute(degrade[0].BitDepth, value);
			lblDegrade[0].set("text", Math.round(value));
		}
		case knbDegrade[1]:
		{
			degrade[0].setAttribute(degrade[0].SampleHold, value);
			lblDegrade[1].set("text", Engine.doubleToString(value, 1));
		}
	}
}

for (k in knbDegrade)
	k.setControlCallback(onknbDegradeControl);
	
// Phaser

inline function onknbPhaserControl(component, value)
{
	switch (component)
	{
		case knbPhaser[0]: // Rate A
		{
			phaser[0].setAttribute(phaser[0].Frequency1, value);
			lblPhaser[0].set("text", Math.round(value) + "Hz");
		}
		case knbPhaser[1]: // Rate B
		{
			phaser[0].setAttribute(phaser[0].Frequency2, value);
			lblPhaser[1].set("text", Math.round(value) + "Hz");
		}
		case knbPhaser[2]: // Feedback
		{
			phaser[0].setAttribute(phaser[0].Feedback, value);
			lblPhaser[2].set("text", Math.round(value * 100) + "%");
		}
		case knbPhaser[3]: // Mix
		{
			phaser[0].setAttribute(phaser[0].Mix, value);
			lblPhaser[3].set("text", Math.round(value * 100) + "%");
		}		
	}
}

for (k in knbPhaser)
	k.setControlCallback(onknbPhaserControl);
	
// Reverb

inline function onknbReverbControl(component, value)
{
	switch (component)
	{
		case knbReverb[0]: // Size
		{
			reverb[0].setAttribute(reverb[0].RoomSize, value);
			lblReverb[0].set("text", Math.round(value * 100) + "%");
		}
		case knbReverb[1]: // Damping
		{
			reverb[0].setAttribute(reverb[0].Damping, value);
			lblReverb[1].set("text", Math.round(value * 100) + "%");
		}
		case knbReverb[2]: // Width
		{
			reverb[0].setAttribute(reverb[0].Width, value);
			lblReverb[2].set("text", Math.round(value * 100) + "%");
		}
		case knbReverb[3]: // Mix
		{
			reverb[0].setAttribute(reverb[0].WetLevel, value);
			lblReverb[3].set("text", Math.round(value * 100) + "%");
		}		
	}
}

for (k in knbReverb)
	k.setControlCallback(onknbReverbControl);
	
// Delay

inline function onknbDelayControl(component, value)
{	
	local time = "";
	switch (component)
	{
		case knbDelay[0]: // Time L
		{			
			// Detect Sync
			if (btnDelay[1].getValue())
				time = syncTimes[value];
			else
				time = Math.round(value) + "ms";
						
			// Now set attributes & check for knb link
			delay[0].setAttribute(delay[0].DelayTimeLeft, value);
			lblDelay[0].set("text", time);
			
			if (btnDelay[0].getValue()) // Link LR
			{
				delay[0].setAttribute(delay[0].DelayTimeRight, value);
				knbDelay[1].setValue(value);
				lblDelay[1].set("text", time);
			}			
		}
		case knbDelay[1]: // Time R
		{
			// Detect Sync
			if (btnDelay[1].getValue())
				time = syncTimes[value];
			else
				time = Math.round(value) + "ms";	

			// Now set attributes & check for knb link
			delay[0].setAttribute(delay[0].DelayTimeRight, value);
			lblDelay[1].set("text", time);
			
			if (btnDelay[0].getValue()) // Link LR
			{
				delay[0].setAttribute(delay[0].DelayTimeLeft, value);
				knbDelay[0].setValue(value);
				lblDelay[0].set("text", time);
			}	
		}
		case knbDelay[2]: // Feedback L
		{
			delay[0].setAttribute(delay[0].FeedbackLeft, value);
			lblDelay[2].set("text", Math.round(value * 100) + "%");
			
			if (btnDelay[0].getValue())
			{
				delay[0].setAttribute(delay[0].FeedbackRight, value);
				knbDelay[3].setValue(value);
				lblDelay[3].set("text", Math.round(value * 100) + "%");
			}
		}
		case knbDelay[3]: // Feedback R
		{
			delay[0].setAttribute(delay[0].FeedbackRight, value);
			lblDelay[3].set("text", Math.round(value * 100) + "%");
			if (btnDelay[0].getValue())
			{
				delay[0].setAttribute(delay[0].FeedbackLeft, value);
				knbDelay[2].setValue(value);
				lblDelay[2].set("text", Math.round(value * 100) + "%");
			}
		}
		case knbDelay[4]: // Mix
		{
			delay[0].setAttribute(delay[0].Mix, value);
			lblDelay[4].set("text", Math.round(value * 100) + "%");
		}
	}
}

for (k in knbDelay)
	k.setControlCallback(onknbDelayControl);
	
inline function onbtnDelayControl(component, value)
{
	switch (component)
	{
		case btnDelay[0]: // Link LR
		{
			if (value);
			{
				delay[0].setAttribute(delay[0].DelayTimeRight, knbDelay[0].getValue());
				delay[0].setAttribute(delay[0].FeedbackRight, knbDelay[2].getValue());
				knbDelay[1].setValue(knbDelay[0].getValue());
				knbDelay[3].setValue(knbDelay[2].getValue()); 
				if (btnDelay[1].getValue()) // Tempo Sync
					lblDelay[1].set("text", syncTimes[knbDelay[0].getValue()]);
				else
					lblDelay[1].set("text", Math.round(knbDelay[0].getValue()) + "ms");
				lblDelay[3].set("text", Math.round(knbDelay[2].getValue() * 100) + "%");
				
			}
		}
		case btnDelay[1]: // Sync
		{	
			delay[0].setAttribute(delay[0].TempoSync, value);							
			for (i=0; i<2; i++)
			{
				if (value)
				{
					knbDelay[i].set("min", 0.0);
					knbDelay[i].set("max", 18.0);
					knbDelay[i].set("stepSize", 1.0);
					knbDelay[i].set("middlePosition", 9.0);
					knbDelay[i].set("defaultValue", 5.0);	
				}
				else
				{
					knbDelay[i].set("min", 5.0);
					knbDelay[i].set("max", 2000.0);
					knbDelay[i].set("stepSize", 1.0);
					knbDelay[i].set("middlePosition", 1000.0);
					knbDelay[i].set("defaultValue", 200.0);
				}								
				knbDelay[i].setValue(knbDelay[i].get("defaultValue"));				
				
				// Set Tooltips
				if (value)
					lblDelay[i].set("text", syncTimes[knbDelay[i].getValue()]);
				else
					lblDelay[i].set("text", Math.round(knbDelay[i].getValue()) + "ms");
			}
			delay[0].setAttribute(delay[0].DelayTimeLeft, knbDelay[0].getValue());
			delay[0].setAttribute(delay[0].DelayTimeRight, knbDelay[1].getValue());				
		}
	}
}

for (b in btnDelay)
	b.setControlCallback(onbtnDelayControl);
	
/* Arp */

inline function onbtnArpBypassControl(component, value)
{
	switch (component)
	{
		case btnArpBypass[0]:
		{
			arp.setBypassed(1-value);
		}
	}
}

for (b in btnArpBypass)
	b.setControlCallback(onbtnArpBypassControl);
	
inline function onknbArpControl(component, value)
{
	switch (component)
	{
		case knbArp[0]: // Steps
		{
			arp.setAttribute(arp.NumStepSlider, value);
			lblArp[0].set("text", Math.round(value));
		}
		case knbArp[1]: // Speed
		{
			arp.setAttribute(arp.SpeedKnob, value);
			lblArp[1].set("text", syncTimes[value]);
		}
		case knbArp[2]: // Octave
		{
			arp.setAttribute(arp.OctaveRange, value);
			if (value > 0)
				lblArp[2].set("text", "+" + Math.round(value));
			else
				lblArp[2].set("text", Math.round(value));
		}
		case knbArp[3]: // Swing
		{
			arp.setAttribute(arp.Shuffle, value);
			lblArp[3].set("text", Math.round(value * 100) + "%");
		}
	}
}

for (k in knbArp)
	k.setControlCallback(onknbArpControl);
	
inline function oncmbArpControl(component, value)
{
	switch (component)
	{
		case cmbArp[0]:
		{
			arp.setAttribute(arp.SequenceComboBox, value);
		}
	}
}

for (c in cmbArp)
	c.setControlCallback(oncmbArpControl);
	
inline function onbtnArpControl(component, value)
{
	local arpNotes = [];

	if (value)
		switch (component)
		{
			case btnArp[0]: // Minor
			{
				for (s=0; s<sldrpckArp[0].getNumSliders(); s++)
				{
					sldrpckArp[0].setSliderAtIndex(s, minorNotes[Math.randInt(0, minorNotes.length)]);
					sldrpckArp[0].changed();
				}
			}
			case btnArp[1]: // Major
			{
				for (s=0; s<sldrpckArp[0].getNumSliders(); s++)
				{
					sldrpckArp[0].setSliderAtIndex(s, majorNotes[Math.randInt(0, majorNotes.length)]);
					sldrpckArp[0].changed();
				}
			}
			case btnArp[2]: // Notes Reset
			{
				sldrpckArp[0].setAllValues(0);
				sldrpckArp[0].changed();			
			}
			case btnArp[3]: // Notes Invert
			{
				for (s=0; s<sldrpckArp[0].getNumSliders(); s++)
				{
					sldrpckArp[0].setSliderAtIndex(s, 0-sldrpckArp[0].getSliderValueAt(s));
				}
				sldrpckArp[0].changed();
			}
			case btnArp[4]: // Velocity Reset
			{
				sldrpckArp[1].setAllValues(110);
				sldrpckArp[1].changed();
			}
			case btnArp[5]: // Length Reset
			{
				sldrpckArp[2].setAllValues(80);
				sldrpckArp[2].changed();
			}
		}
}

for (b in btnArp)
	b.setControlCallback(onbtnArpControl);
	
/* Move */

inline function onknbMoveXYControl(component, value)
{
	switch (component)
	{
		case knbMoveX:
		{
			Synth.setMacroControl(1, knbMoveX.getValue() * 1.27);
			Synth.setMacroControl(2, 127-(knbMoveX.getValue() * 1.27));
		}
		case knbMoveY:
		{
			Synth.setMacroControl(3, knbMoveY.getValue() * 1.27);
			Synth.setMacroControl(4, 127-(knbMoveY.getValue() * 1.27));
		}
	}
	pnlMoveXYPad.repaint();
}

knbMoveX.setControlCallback(onknbMoveXYControl);
knbMoveY.setControlCallback(onknbMoveXYControl);

inline function onknbMoveControl(component, value)
{
	switch (component)
	{
		case knbMove[0]: // AHDSR A Attack
		{
			Macro5_AHDSR.setAttribute(Macro5_AHDSR.Attack, value);
			lblMove[0].set("text", Math.round(value) + "ms");
		}
		case knbMove[1]: // AHDSR A Decay
		{
			Macro5_AHDSR.setAttribute(Macro5_AHDSR.Decay, value);
			lblMove[1].set("text", Math.round(value) + "ms");
		}
		case knbMove[2]: // AHDSR A Sustain
		{
			Macro5_AHDSR.setAttribute(Macro5_AHDSR.Sustain, value);
			lblMove[2].set("text", Math.round(value) + "dB");
		}
		case knbMove[3]: // AHDSR A Release
		{
			Macro5_AHDSR.setAttribute(Macro5_AHDSR.Release, value);
			lblMove[3].set("text", Math.round(value) + "ms");
		}
		case knbMove[4]: // AHDSR B Attack
		{
			Macro6_AHDSR.setAttribute(Macro6_AHDSR.Attack, value);
			lblMove[4].set("text", Math.round(value) + "ms");
		}
		case knbMove[5]: // AHDSR B Decay
		{
			Macro6_AHDSR.setAttribute(Macro6_AHDSR.Decay, value);
			lblMove[5].set("text", Math.round(value) + "ms");
		}
		case knbMove[6]: // AHDSR B Sustain
		{
			Macro6_AHDSR.setAttribute(Macro6_AHDSR.Sustain, value);
			lblMove[6].set("text", Math.round(value) + "dB");
		}
		case knbMove[7]: // AHDSR B Release
		{
			Macro6_AHDSR.setAttribute(Macro6_AHDSR.Release, value);
			lblMove[7].set("text", Math.round(value) + "ms");
		}
		case knbMove[8]: // Chaos Rate
		{
			
		}
		case knbMove[9]: // Chaos Intensity
		{
			
		}
	}
}

for (k in knbMove)
	k.setControlCallback(onknbMoveControl);

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
	

	

