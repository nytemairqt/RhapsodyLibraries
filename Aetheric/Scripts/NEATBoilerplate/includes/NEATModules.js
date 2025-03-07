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

const samplers = [Synth.getChildSynth("SamplerA"), Synth.getChildSynth("SamplerB"), Synth.getChildSynth("SamplerC")];
const ahdsrs = [Synth.getModulator("SamplerA_AHDSR"), Synth.getModulator("SamplerB_AHDSR"), Synth.getModulator("SamplerC_AHDSR")];
const velocities = [Synth.getModulator("SamplerA_Velocity"), Synth.getModulator("SamplerB_Velocity"), Synth.getModulator("SamplerC_Velocity")];
const pitchWheels = [Synth.getModulator("SamplerA_PitchWheel"), Synth.getModulator("SamplerB_PitchWheel"), Synth.getModulator("SamplerC_PitchWheel")];
const pitchMods = [Synth.getModulator("SamplerA_PitchMod"), Synth.getModulator("SamplerB_PitchMod"), Synth.getModulator("SamplerC_PitchMod")];
const tuneMods = [Synth.getModulator("SamplerA_TuneMod"), Synth.getModulator("SamplerB_TuneMod"), Synth.getModulator("SamplerC_TuneMod")];
const loopsPitchMods = [Synth.getModulator("SamplerA_LoopsPitchMod"), Synth.getModulator("SamplerB_LoopsPitchMod"), Synth.getModulator("SamplerC_LoopsPitchMod")];
const utilities = [Synth.getEffect("SamplerA_Utility"), Synth.getEffect("SamplerB_Utility"), Synth.getEffect("SamplerC_Utility")];
const sampleStarts = [Synth.getModulator("SamplerA_SampleStart"), Synth.getModulator("SamplerB_SampleStart"), Synth.getModulator("SamplerC_SampleStart")];

// Sampler A
const SamplerA = Synth.getChildSynth("SamplerA");
const SamplerA_AHDSR = Synth.getModulator("SamplerA_AHDSR");
const SamplerA_Velocity = Synth.getModulator("SamplerA_Velocity");
const SamplerA_PitchWheel = Synth.getModulator("SamplerA_PitchWheel");
const SamplerA_PitchMod = Synth.getModulator("SamplerA_PitchMod");
const SamplerA_TuneMod = Synth.getModulator("SamplerA_TuneMod");
const SamplerA_LoopsPitchMod = Synth.getModulator("SamplerA_LoopsPitchMod");
const SamplerA_Utility = Synth.getEffect("SamplerA_Utility");
const SamplerA_SampleStart = Synth.getModulator("SamplerA_SampleStart");

// Sampler B
const SamplerB = Synth.getChildSynth("SamplerB");
const SamplerB_AHDSR = Synth.getModulator("SamplerB_AHDSR");
const SamplerB_Velocity = Synth.getModulator("SamplerB_Velocity");
const SamplerB_PitchWheel = Synth.getModulator("SamplerB_PitchWheel");
const SamplerB_PitchMod = Synth.getModulator("SamplerB_PitchMod");
const SamplerB_TuneMod = Synth.getModulator("SamplerB_TuneMod");
const SamplerB_LoopsPitchMod = Synth.getModulator("SamplerB_LoopsPitchMod");
const SamplerB_Utility = Synth.getEffect("SamplerB_Utility");
const SamplerB_SampleStart = Synth.getModulator("SamplerB_SampleStart");

// Sampler C
const SamplerC = Synth.getChildSynth("SamplerC");
const SamplerC_AHDSR = Synth.getModulator("SamplerC_AHDSR");
const SamplerC_Velocity = Synth.getModulator("SamplerC_Velocity");
const SamplerC_PitchWheel = Synth.getModulator("SamplerC_PitchWheel");
const SamplerC_PitchMod = Synth.getModulator("SamplerC_PitchMod");
const SamplerC_TuneMod = Synth.getModulator("SamplerC_TuneMod");
const SamplerC_LoopsPitchMod = Synth.getModulator("SamplerC_LoopsPitchMod");
const SamplerC_Utility = Synth.getEffect("SamplerC_Utility");
const SamplerC_SampleStart = Synth.getModulator("SamplerC_SampleStart");

// Sampler Other
const SamplerOther = Synth.getChildSynth("SamplerOther");
const SamplerOther_AHDSR = Synth.getModulator("SamplerOther_AHDSR");
const SamplerOther_Velocity = Synth.getModulator("SamplerOther_Velocity");