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

// NEATBrain Modules

const samplerA = [Synth.getChildSynth("SamplerA"),
				  Synth.getModulator("SamplerA_AHDSR"),
				  Synth.getModulator("SamplerA_Velocity"),
				  Synth.getModulator("SamplerA_PitchWheel"),
				  Synth.getModulator("SamplerA_PitchMod"),
				  Synth.getModulator("SamplerA_TuneMod"),
				  Synth.getModulator("SamplerA_LoopsPitchMod"),
				  Synth.getEffect("SamplerA_Utility"),
				  Synth.getModulator("SamplerA_SampleStart")];
				  
const samplerB = [Synth.getChildSynth("SamplerB"),
				  Synth.getModulator("SamplerB_AHDSR"),
				  Synth.getModulator("SamplerB_Velocity"),
				  Synth.getModulator("SamplerB_PitchWheel"),
				  Synth.getModulator("SamplerB_PitchMod"),
				  Synth.getModulator("SamplerB_TuneMod"),
				  Synth.getModulator("SamplerB_LoopsPitchMod"),
				  Synth.getEffect("SamplerB_Utility"),
				  Synth.getModulator("SamplerB_SampleStart")];
				  
const samplerC = [Synth.getChildSynth("SamplerC"),
				  Synth.getModulator("SamplerC_AHDSR"),
				  Synth.getModulator("SamplerC_Velocity"),
				  Synth.getModulator("SamplerC_PitchWheel"),
				  Synth.getModulator("SamplerC_PitchMod"),
				  Synth.getModulator("SamplerC_TuneMod"),
				  Synth.getModulator("SamplerC_LoopsPitchMod"),
				  Synth.getEffect("SamplerC_Utility"),
				  Synth.getModulator("SamplerC_SampleStart")];
				  
const samplerOther = [Synth.getChildSynth("SamplerOther"),
					  Synth.getModulator("SamplerOther_AHDSR"),
					  Synth.getModulator("SamplerOther_Velocity"),
					  Synth.getModulator("SamplerOther_PitchWheel"),
					  Synth.getModulator("SamplerOther_PitchMod"),
					  Synth.getModulator("SamplerOther_TuneMod"),
					  Synth.getModulator("SamplerOther_LoopsPitchMod"),
					  Synth.getEffect("SamplerOther_Utility"),
					  Synth.getModulator("SamplerOther_SampleStart")];	
					  
/* FX */					  
const filter = [Synth.getEffect("Filter")];		  	
const amp = [Synth.getEffect("Amp_EQ"), Synth.getEffect("Amp"), Synth.getEffect("Amp_CorrectiveEQ"), Synth.getEffect("Amp_Cab")];
const drive = [Synth.getEffect("Waveshaper"), Synth.getEffect("TubeDrive")];
const utility = [Synth.getEffect("Utility")];
const stutter = [Synth.getEffect("LFOGain"), Synth.getModulator("LFOGainMod")];
const phaser = [Synth.getEffect("Phaser")];
const degrade = [Synth.getEffect("Degrade")];
const reverb = [Synth.getEffect("Reverb")];
const delay = [Synth.getEffect("Delay")];

  				