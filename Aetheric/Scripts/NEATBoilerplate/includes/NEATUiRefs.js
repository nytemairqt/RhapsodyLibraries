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

const btnPage = [Content.getComponent("btnSamplePage"),
				  Content.getComponent("btnFXPage"),
				  Content.getComponent("btnArpPage"),
				  Content.getComponent("btnMovePage"),
				  Content.getComponent("btnRandomPage")];

const pnlSampler = [Content.getComponent("pnlSamplerA"),
					 Content.getComponent("pnlSamplerB"),
					 Content.getComponent("pnlSamplerC")]

const cmbSampler = [Content.getComponent("cmbSamplerA"),
					Content.getComponent("cmbSamplerB"),
					Content.getComponent("cmbSamplerC")];

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

// Assign LAF

for (b in btnPage)
	b.setLocalLookAndFeel(LAFButtonChangePage);	
