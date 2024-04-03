/**
 * Created by jreel on 4/23/2017.
 *
 * This file contains the hashtable of Ochem multiple-choice questions.
 *
 * Question.topic -- allows selection of questions based on chapter
 * Question.question -- the actual text of the question as displayed to the player
 * Question.choices -- an array of answers, will be randomized on display
 * Question.correct -- the order of the above array containing the correct answer
 */

var Questions = [

    {
        topic: "Synthesis",
        question: "Which of the following methods could NOT be used to synthesize an alcohol?",
        choices: ["acid-catalyzed dehydration", "oxymercuration-reduction", "hydroboration-oxidation", "reaction of H<sub>2</sub>O with a 3&deg; alkyl halide"],
        correct: 1,
        note: "Acid-catalyzed <u>de</u>hydration converts an alcohol into an alkene."
    },

    {
        topic: "Alkenes",
        question: "Which of the following reagents results in a <em>syn</em> addition to an alkene?",
        choices: ["OsO<sub>4</sub> / NMO", "Hg(OAc)<sub>2</sub> + H<sub>2</sub>O, then NaBH<sub>4</sub>", "Br<sub>2</sub>", "HBr"],
        correct: 1,
        note: "OsO<sub>4</sub> adds in a syn fashion. Oxymercuration-reduction and bromination are both anti additions, and HBr addition is neither."
    },

    {
        topic: "Alkenes",
        question: "Which of the following reagents does NOT result in a <em>syn</em> addition to an alkene?",
        choices: ["H<sub>2</sub>, Pt", "HBr + peroxides", "BH<sub>3</sub> then H<sub>2</sub>O<sub>2</sub>, OH<sup>&minus;</sup>", "KMnO<sub>4</sub>, NaOH</sup>"],
        correct: 2,
        note: "HBr + peroxides is neither syn or anti addition, and is therefore the correct answer, since all the other reactions are syn additions."
    },

    {
        topic: "Alkenes",
        question: "Which of the following reagents results in an <em>anti</em> addition to an alkene?",
        choices: ["Br<sub>2</sub>", "H<sub>3</sub>O<sup>+</sup>", "CH<sub>2</sub>I<sub>2</sub> + Zn(Cu)", "O<sub>3</sub> then Zn/H<sup>+</sup>"],
        correct: 1,
        note: "Br<sub>2</sub> adds in an anti fashion. Cyclopropanation is a syn addition; acid-catalyzed hydration and ozonolysis are neither."
    },

    {
        topic: "Alkenes",
        question: "Which of the following reagents will produce the anti-Markovnikov product?",
        choices: ["Cl<sub>2</sub>", "OsO<sub>4</sub>", "O<sub>3</sub> then (CH<sub>3</sub>)<sub>2</sub>S", "HBr + peroxides"],
        correct: 4,
        note: "HBr + peroxides delivers the anti-Markovnikov product, since Br adds to the less-substituted carbon. (For the other reactions listed here, Markovnikov vs. anti-Markovnikov does not apply.)"
    },

    {
        topic: "Alkenes",
        question: "Which of the following reagents will produce the Markovnikov product?",
        choices: ["BH<sub>3</sub> then H<sub>2</sub>O<sub>2</sub>", "H<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O", "mCPBA", "Br<sub>2</sub>"],
        correct: 2,
        note: "Acid-catalyzed hydration delivers the Markovnikov product, since OH adds to the more-substituted carbon. Hydroboration-oxidation gives an anti-Markovnikov product. (For the other reactions listed here, Markovnikov vs. anti-Markovnikov does not apply.)"
    },

    {
        topic: "Ethers & Epoxides",
        question: "Which of the following methods could NOT be used to synthesize an ether from an alkene?",
        choices: ["oxymercuration in alcohol solvent", "acid + alcohol", "Williamson ether synthesis", "Br<sub>2</sub> + alcohol"],
        correct: 3,
        note: "Williamson ether synthesis is a reaction of an alkoxide with an alkyl halide -- no alkene is involved."
    },

    {
        topic: "Alkenes",
        question: "Which of the following reactions results in a net oxidation of the starting alkene?",
        choices: ["hydrogenation", "epoxidation", "acid-catalyzed hydration", "hydrohalogenation"],
        correct: 2,
        note: "Epoxidation results in a net oxidation, as both carbons of the alkene have their oxidation state increased. Hydrogenation is a net reduction. Hydration and hydrohalogenation result in no net change, since one alkene carbon is reduced while the other is oxidized."
    },

    {
        topic: "Alkenes",
        question: "Which of the following reagents will produce a net oxidation of the starting alkene?",
        choices: ["H<sub>2</sub>, Pd", "OsO<sub>4</sub>", "BH<sub>3</sub> then H<sub>2</sub>O<sub>2</sub>", "HBr + peroxides"],
        correct: 2,
        note: "Diol formation (OsO<sub>4</sub>) results in a net oxidation, as both carbons of the alkene have their oxidation state increased. Hydrogenation (H<sub>2</sub>, Pd/C) is a net reduction. Hydroboration-oxidation (BH<sub>3</sub> then H<sub>2</sub>O<sub>2</sub>) and hydrohalogenation (HBr + peroxides) result in no net change, since one alkene carbon is reduced while the other is oxidized."
    },

    {
        topic: "Alkenes",
        question: "Which of the following reactions results in a net reduction of the starting alkene?",
        choices: ["hydrogenation", "halogenation", "epoxidation", "acid-catalyzed hydration"],
        correct: 1,
        note: "Hydrogenation is a net reduction, as both carbons of the alkene have their oxidation state decreased. Epoxidation and halogenation are both net oxidations, as both carbons have their oxidation state increased.  Hydration results in no net change, since one alkene carbon is oxidized while the other is reduced."
    },

    {
        topic: "Alkenes",
        question: "Which of the following reagents will produce a net reduction of the starting alkene?",
        choices: ["H<sub>2</sub>, Pt", "mCPBA", "HCl", "H<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O"],
        correct: 1,
        note: "Hydrogenation (H<sub>2</sub>, Pt) is a net reduction, as both carbons of the alkene have their oxidation state decreased. Epoxidation (mCPBA) results in a net oxidation, as both carbons have their oxidation state increased. Hydration (H<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O) and HCl addition both result in no net change, since one alkene carbon is reduced while the other is oxidized."
    },

    {
        topic: "Alkenes",
        question: "Which of the following reactions results in NO net change in oxidation state of the starting alkene?",
        choices: ["hydrogenation", "hydrohalogenation", "ozonolysis", "bromination"],
        correct: 2,
        note: "Hydrohalogenation results in no net change, since one alkene carbon is reduced while the other is oxidized. Hydrogenation is a net reduction, while ozonolysis and bromination are both net oxidations."
    },

    {
        topic: "Alkenes",
        question: "Which of the following reagents will produce NO net change in oxidation state of the starting alkene?",
        choices: ["Br<sub>2</sub>", "Br<sub>2</sub> + H<sub>2</sub>O", "KMnO<sub>4</sub>, OH<sup>&minus;</sup>", "H<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O"],
        correct: 4,
        note: "Hydration (H<sub>2</sub>SO<sub>4</sub> + H<sub>2</sub>O) results in no net change, since one alkene carbon is oxidized while the other is reduced. All the other reactions are net oxidations, as both carbons have their oxidation state increased."
    },

    {
        topic: "Alkenes",
        question: "What is necessary for ozonolysis to NOT remove carbon fragments from the starting material?",
        choices: ["oxidative workup (H<sub>2</sub>O<sub>2</sub>)", "reductive workup (CH<sub>3</sub>)<sub>2</sub>S)", "at least two double bonds", "only one double bond in a ring"],
        correct: 4,
        randomize: false,
        note: "Ozonolysis cleaves an alkene double bond, separating the two carbons. In order for fragments to not be lost, then, the double bond must occur within a ring, such that the carbonyls are still connected by a carbon chain afterwards."
    },

    {
        topic: "Ethers & Epoxides",
        question: "The Williamson ether synthesis forms an ether by reacting an alcohol with:",
        choices: ["an alkyl halide under basic conditions", "an alkyl halide under acidic conditions", "an alkene under acidic conditions", "an epoxide under basic conditions"],
        correct: 1,
        randomize: false,
        note: "Although three of the four answer choices will in fact form an ether, the Williamson ether synthesis is specifically the reaction of an alcohol with an alkyl halide under basic conditions."
    },
/*
    {
        topic: "Alcohols",
        question: "Which of the following reagents will convert 1-hexanol into an aldehyde?",
        choices: ["KMnO<sub>4</sub>", "PCC", "K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> / H<sub>3</sub>O<sup>+</sup>", "none of these"],
        correct: 2,
        note: "PCC will stop the oxidation at the aldehyde step; the other oxidants will all further oxidize the aldehyde to a carboxylic acid."
    },
    {
        topic: "Alcohols",
        question: "Which of the following reagents will convert 2-pentanol into an aldehyde?",
        choices: ["KMnO<sub>4</sub>", "PCC", "K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> / H<sub>3</sub>O<sup>+</sup>", "none of these"],
        correct: 4,
        note: "Only primary alcohols can be converted to aldehydes."
    },
    {
        topic: "Alcohols",
        question: "Which of the following reagents will convert 3-pentanol into a ketone?",
        choices: ["KMnO<sub>4</sub>", "PCC", "K<sub>2</sub>Cr<sub>2</sub>O<sub>7</sub> / H<sub>3</sub>O<sup>+</sup>", "any of these"],
        correct: 4,
        note: "Any of these oxidants will convert a secondary alcohol into a ketone."
    },
*/
    {
        topic: "Ethers & Epoxides",
        question: "Which of the following reactions could NOT be used to synthesize an epoxide?",
        choices: ["alkene + mCPBA", "alkene + CH<sub>3</sub>CO<sub>3</sub>H", "halohydrin + NaH", "ethylene oxide + strong base"],
        correct: 4,
        note: "An alkene will react with a peroxyacid (such as mCPBA or CH<sub>3</sub>CO<sub>3</sub>H) to form an epoxide. NaH will deprotonate the OH group of a halohydrin, which will form an epoxide via SN2-like displacement of the halide. Ethylene oxide is itself an epoxide and would not react with anything to form an epoxide."
    },
/*
    {
        topic: "Synthesis",
        question: "Which of the following reactions could NOT be used to synthesize a glycol?",
        choices: ["epoxide + CH<sub>3</sub>MgBr", "epoxide + NaOH", "epoxide + H<sub>3</sub>O<sup>+</sup>", "alkene + OsO<sub>4</sub>"],
        correct: 1,
        note: "One method of glycol formation is OsO<sub>4</sub> addition to alkenes. Another is epoxide ring-opening using either OH (basic conditions) or H<sub>2</sub>O (acidic conditions). Epoxides can also be ring-opened using other nucleophiles such as a Grignard reagent; however, this does not form a glycol."
    },
*/
    {
        topic: "Ethers & Epoxides",
        question: "Epoxide ring-opening under acidic conditions will result in:",
        choices: ["the nucleophile adding to the more substituted carbon", "the nucleophile adding to the less substituted carbon", "either (the reaction is not regiospecific)", "neither (epoxides do not ring-open under acidic conditions)"],
        correct: 1,
        randomize: false,
        note: "Under acidic conditions, epoxide O will be protonated, and the nucleophile will subsequently add to the more substituted carbon. The mechanism is similar to that of other 3-membered rings bearing a positive charge, such as oxymercuration and bromination of alkenes."
    },

    {
        topic: "Ethers & Epoxides",
        question: "Epoxide ring-opening under basic conditions will result in:",
        choices: ["the nucleophile adding to the more substituted carbon", "the nucleophile adding to the less substituted carbon", "either (the reaction is not regiospecific)", "neither (epoxides do not ring-open under basic conditions)"],
        correct: 2,
        randomize: false,
        note: "Under basic conditions, the nucleophilic attack resembles the SN2 mechanism, with attack occuring at the less-substituted carbon."
    },

    {
        topic: "SN2/E2/SN1/E1",
        question: "Which of the following is a polar protic solvent?",
        choices: ["acetic acid", "acetone", "ether", "CH<sub>2</sub>Cl<sub>2</sub>"],
        correct: 1,
        note: "Acetic acid (CH<sub>3</sub>COOH) has a hydrogen directly bound to an electronegative atom, and therefore is a polar protic solvent. (The others are all polar aprotic.)"
    },

    {
        topic: "SN2/E2/SN1/E1",
        question: "Which of the following is a polar protic solvent?",
        choices: ["DMSO", "acetone", "hexanes", "ethanol"],
        correct: 4,
        note: "Ethanol (CH<sub>3</sub>CH<sub>2</sub>OH) has a hydrogen directly bound to an electronegative atom, and therefore is a polar protic solvent. (Acetone and DMSO are polar aprotic; hexanes is nonpolar.)"
    },

    {
        topic: "SN2/E2/SN1/E1",
        question: "Which of the following is a polar protic solvent?",
        choices: ["CCl<sub>4</sub>", "DMF", "NH<sub>3</sub>", "THF"],
        correct: 3,
        note: "NH<sub>3</sub> has a hydrogen directly bound to an electronegative atom, and therefore is a polar protic solvent. (DMF and THF are polar aprotic; CCl<sub>4</sub> is nonpolar.)"
    },

    {
        topic: "SN2/E2/SN1/E1",
        question: "Which of the following is a polar aprotic solvent?",
        choices: ["benzene", "THF", "H<sub>2</sub>O", "CCl<sub>4</sub>"],
        correct: 2,
        note: "THF is a cyclic ether, and is polar aprotic. (H<sub>2</sub>O is polar protic; benzene and CCl<sub>4</sub> are both nonpolar.)"
    },

    {
        topic: "SN2/E2/SN1/E1",
        question: "Which of the following is a polar aprotic solvent?",
        choices: ["acetone", "tBuOH", "acetic acid", "hexanes"],
        correct: 1,
        note: "Acetone is polar aprotic. (Acetic acid and tBuOH are both polar protic; hexanes is nonpolar.)"
    },

    {
        topic: "SN2/E2/SN1/E1",
        question: "Which of the following is a polar aprotic solvent?",
        choices: ["EtNH<sub>2</sub>", "EtOH", "DMSO", "toluene"],
        correct: 3,
        note: "DMSO is a polar aprotic solvent. (Ethanol and EtNH<sub>2</sub> are both polar protic; toluene is nonpolar.)"
    },

 {
     topic: "SN2/E2/SN1/E1",
     question: "Which of the following is a polar aprotic solvent?",
        choices: ["acetone", "ether", "CH<sub>2</sub>Cl<sub>2</sub>", "all of the above"],
        correct: 4,
        randomize: false,
        note: "All of these are polar aprotic solvents!"
    },

 {
     topic: "SN2/E2/SN1/E1",
     question: "Which of the following conditions will promote E1 over SN1 for a 3&deg; alkyl halide?",
        choices: ["heat", "polar aprotic solvent", "polar protic solvent", "all of the above"],
        correct: 1,
        randomize: false,
        note: "Elimination reactions are promoted by heat. (Protic solvents favor both SN1 and E1.)"
    },

    {
        topic: "SN2/E2/SN1/E1",
        question: "Which of the following conditions will promote an E2 reaction over SN2?",
        choices: ["strong bulky base", "protic solvent", "3&deg; alkyl halide", "all of the above"],
        correct: 4,
        randomize: false,
        note: "All of these conditions are favorable for an E2 reaction and disfavorable for SN2."
    },

    {
        topic: "SN2/E2/SN1/E1",
        question: "Which of the following reactions is most likely for a 1&deg; alkyl halide?",
        choices: ["SN2", "SN1", "E2", "E1"],
        correct: 1,
        randomize: false,
        note: "Primary alkyl halides are most reactive in the SN2 mechanism, and least reactive in the others."
    },

    {
        topic: "SN2/E2/SN1/E1",
        question: "Which of these is the worst leaving group?",
        choices: ["Cl<sup>&minus;</sup>", "OH<sup>&minus;</sup>", "TsO<sup>&minus;</sup>", "H<sub>2</sub>O"],
        correct: 2,
        note: "Leaving group ability is very much related to base stability -- good leaving groups tend to be weak bases. The worst leaving group, then, is OH<sup>&minus;</sup>."
    },

    {
        topic: "SN2/E2/SN1/E1",
        question: "Which of these reagents could you use to convert OH into a good leaving group?",
        choices: ["PBr<sub>3</sub>", "TsCl", "H<sub>2</sub>SO<sub>4</sub>", "any of these"],
        correct: 4,
        randomize: false,
        note: "In order, these would convert OH into Br, TsO, or H<sub>2</sub>O -- all of which are excellent leaving groups."
    },

    {
        topic: "SN2/E2/SN1/E1",
        question: "Which of the following conditions will promote an SN2 reaction?",
        choices: ["good nuclophile but weak base", "polar aprotic solvent", "1&deg; alkyl halide", "all of the above"],
        correct: 4,
        randomize: false,
        note: "All of these conditions are favorable for an SN2 reaction."
    },

    {
        topic: "Physical Properties",
        question: "Which of the following would you expect to have the highest boiling point?",
        choices: ["NaOCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>",
                    "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>OH",
                    "CH<sub>3</sub>CH<sub>2</sub>OCH<sub>3</sub>",
                    "CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>"],
        correct: 1,
        note: "Ionic compounds tend to have the highest boiling (and melting) points, so the answer is Na<sup>+</sup> <sup>&minus;</sup>OCH<sub>2</sub>CH<sub>2</sub>CH<sub>3</sub>"
    },

    {
        topic: "Alkanes",
        question: "Which of the following alkanes is NOT an isomer of the others?",
        choices: ["2,3-dimethylpentane",
            "3-methylhexane",
            "3-ethylpentane",
            "1-methylheptane"],
        correct: 4,
        note: "Count the carbons implied by the name (pentane, hexane, heptane) and the substituents (methyl, ethyl, dimethyl). 1-methylheptane (which should more properly be named 'octane') has 8 carbons, while the others have 7."
    },

    {
        topic: "Physical Properties",
        question: "Which of the following C<sub>8</sub>H<sub>18</sub> isomers would you expect to have the highest melting point?",
        choices: ["2,2,3,3-tetramethylbutane",
            "2,5-dimethylhexane",
            "2,3-dimethylhexane",
            "3-methylheptane"],
        correct: 1,
        note: "The ability to closely-pack into a crystal lattice will increase the melting point; therefore, highly-symmetrical molecules will tend to have higher melting points. In this case, 2,2,3,3-tetramethylbutane is very spherical and therefore has a more closely-packed crystal lattice, and thus the highest melting point."
    },

    {
        topic: "Physical Properties",
        question: "Which of the following C<sub>8</sub>H<sub>18</sub> isomers would you expect to have the lowest boiling point?",
        choices: ["2,2,3,3-tetramethylbutane",
            "2,5-dimethylhexane",
            "3-methylheptane",
            "n-octane"],
        correct: 1,
        note: "Increased surface area leads to increased van der Waals attractive forces, which increases the boiling point. Here, 2,2,3,3-tetramethylbutane is very spherical and therefore has the lowest surface area, and thus the lowest boiling point."
    },

    {
        topic: "Physical Properties",
        question: "Which of the following C<sub>4</sub>H<sub>10</sub>O isomers would you expect to have the highest boiling point?",
        choices: ["diethyl ether: CH<sub>3</sub>CH<sub>2</sub>-O-CH<sub>2</sub>CH<sub>3</sub>",
            "n-butanol: CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>CH<sub>2</sub>OH",
            "methyl propyl ether: CH<sub>3</sub>CH<sub>2</sub>CH<sub>2</sub>-O-CH<sub>3</sub>",
            "t-butanol: (CH<sub>3</sub>)<sub>3</sub>COH"],
        correct: 2,
        note: "The ability to hydrogen bond will dramatically increase boiling point, so the alcohols will have higher boiling points than the ethers. Between n-butanol and t-butanol, t-butanol is more spherical and so has lower surface area. n-butanol has more surface area, which leads to increased van der Waals attractive forces, which increases the boiling point."
    },

    {
        topic: "Cycloalkanes",
        question: "Describe the preferred conformation of <em>cis</em>-1-isopropyl-3-methylcyclohexane:",
        choices: ["isopropyl is axial, methyl is equatorial",
            "isopropyl is equatorial, methyl is axial",
            "both groups are axial",
            "both groups are equatorial"],
        correct: 4,
        randomize: false,
        note: "'cis' describes the isomer in which both groups are on the same side of the ring (that is, either both 'up' or both 'down'). In the 1 and 3 positions, axial groups are both 'up' and equatorial groups are both 'down' (or vice-versa). In this case, both groups will be equatorial, since this is energetically preferred over having both axial."
    },

    {
        topic: "Cycloalkanes",
        question: "Describe the preferred conformation of <em>trans</em>-1-isopropyl-3-methylcyclohexane:",
        choices: ["isopropyl is axial, methyl is equatorial",
            "isopropyl is equatorial, methyl is axial",
            "both groups are axial",
            "both groups are equatorial"],
        correct: 2,
        randomize: false,
        note: "'trans' describes the isomer in which the groups are on opposite sides of the ring (one 'up' and one 'down'). In the 1 and 3 positions, axial groups are both 'up' and equatorial groups are both 'down' (or vice-versa); therefore, one group will be axial and one will be equatorial. The preferred conformation is the one in which the larger group (isopropyl) is equatorial."
    },

    {
        topic: "Cycloalkanes",
        question: "Describe the preferred conformation of <em>cis</em>-1-isopropyl-4-methylcyclohexane:",
        choices: ["isopropyl is axial, methyl is equatorial",
            "isopropyl is equatorial, methyl is axial",
            "both groups are axial",
            "both groups are equatorial"],
        correct: 2,
        randomize: false,
        note: "'cis' describes the isomer in which both groups are on the same side of the ring (that is, either both 'up' or both 'down'). In the 1 and 4 positions, one axial group is 'up' while the other is 'down', which means that an axial and an equatorial are both 'up'. So for a cis-1,4 isomer, one group will be axial and one will be equatorial. The preferred conformation is the one in which the larger group (isopropyl) is equatorial."
    },

    {
        topic: "Cycloalkanes",
        question: "Describe the preferred conformation of <em>trans</em>-1-isopropyl-4-methylcyclohexane:",
        choices: ["isopropyl is axial, methyl is equatorial",
            "isopropyl is equatorial, methyl is axial",
            "both groups are axial",
            "both groups are equatorial"],
        correct: 4,
        randomize: false,
        note: "'trans' describes the isomer in which the groups are on opposite sides of the ring (one 'up' and one 'down'). In the 1 and 4 positions, one axial group is 'up' while the other is 'down' -- and one equatorial group is 'down' while the other is 'up'. So for a trans-1,4 isomer, both groups will be axial or both equatorial; having both groups equatorial is energetically preferred over having both axial."
    },

    {
        topic: "Synthesis",
        question: "Which of the following functional groups would NOT react with HBr?",
        choices: ["alkane", "alkene", "alkyne", "alcohol"],
        correct: 1,
        randomize: false,
        note: "Alkanes only react with Br<sub>2</sub> (and Cl<sub>2</sub>) under free-radical conditions (light, heat, and/or peroxides). Alkenes react with HBr for form alkyl halides, alkynes react to form alkenyl halides, and alcohols can react with concentrated HBr to form alkyl halides."
    },

    {
        topic: "Acids & Bases",
        question: "What is the Bronsted-Lowry definition of an acid?",
        choices: ["a proton (H<sup>+</sup>) donor", "a proton acceptor", "an electron pair donor", "an electron pair acceptor"],
        correct: 1,
        randomize: false,
        note: "A Bronsted-Lowry acid is a proton donor."
    },

    {
        topic: "Acids & Bases",
        question: "What is the Bronsted-Lowry definition of a base?",
        choices: ["a proton (H<sup>+</sup>) donor", "a proton acceptor", "an electron pair donor", "an electron pair acceptor"],
        correct: 2,
        randomize: false,
        note: "A Bronsted-Lowry base is a proton acceptor."
    },

    {
        topic: "Acids & Bases",
        question: "What is the Lewis definition of an acid?",
        choices: ["a proton (H<sup>+</sup>) donor", "a proton acceptor", "an electron pair donor", "an electron pair acceptor"],
        correct: 4,
        randomize: false,
        note: "A Lewis acid is an electron pair acceptor."
    },

    {
        topic: "Acids & Bases",
        question: "What is the Lewis definition of a base?",
        choices: ["a proton (H<sup>+</sup>) donor", "a proton acceptor", "an electron pair donor", "an electron pair acceptor"],
        correct: 3,
        randomize: false,
        note: "A Lewis base is an electron pair donor."
    },

    {
        topic: "Acids & Bases",
        question: "Which of the following is the strongest acid?",
        choices: ["CH<sub>3</sub>CH<sub>2</sub>CH<sub>3</sub>", "CH<sub>3</sub>-C&equiv;C-H", "CH<sub>3</sub>CH<sub>2</sub>OH", "CH<sub>3</sub>CH<sub>2</sub>NH<sub>2</sub>"],
        correct: 3,
        note: "The strongest acid has the most stable conjugate base. The alcohol would have the most stable conjugate base (placing a negative charge on an electronegative atom like oxygen is a stabilizing effect), and therefore would be the strongest acid."
    },

    {
        topic: "Acids & Bases",
        question: "Which of the following is the weakest acid?",
        choices: ["CH<sub>3</sub>CH<sub>2</sub>CH<sub>3</sub>", "CH<sub>3</sub>-C&equiv;C-H", "CH<sub>3</sub>CH<sub>2</sub>OH", "CH<sub>3</sub>CH<sub>2</sub>NH<sub>2</sub>"],
        correct: 1,
        note: "The strongest acid has the most stable conjugate base. The alkane would have the most unstable conjugate base, and therefore would be the weakest acid. (In fact, the pKa of an alkane is ~50.)"
    },

    {
        topic: "Acids & Bases",
        question: "Which of the following is the strongest base?",
        choices: ["CH<sub>3</sub>CH<sub>2</sub>MgBr", "NaNH<sub>2</sub>", "KOtBu", "NaOAc"],
        correct: 1,
        note: "The strongest base has the weakest conjugate acid. The conjugate acid of the Grignard reagent (CH<sub>3</sub>CH<sub>2</sub>MgBr) is an alkane, which is an incredibly weak acid (pKa ~50); therefore the Grignard reagent would be the strongest base."
    },

    {
        topic: "Acids & Bases",
        question: "Which of the following is the weakest base?",
        choices: ["CH<sub>3</sub>CH<sub>2</sub>MgBr", "NaNH<sub>2</sub>", "KOtBu", "NaOAc"],
        correct: 4,
        note: "The weakest base has the strongest conjugate acid. The conjugate acid of the NaOAc (sodium acetate) is acetic acid, which is stronger than the conjugate acid of any other choices."
    },

    {
        topic: "Acids & Bases",
        question: "Which of the following is the strongest base?",
        choices: ["NaNH<sub>2</sub>", "NaOCH<sub>3</sub>", "NaOAc", "NaOH"],
        correct: 1,
        note: "The strongest base has the weakest conjugate acid. The conjugate acid of NaNH<sub>2</sub> is ammonia (NH<sub>3</sub>), which is less acidic than the conjugate acid of any of the other choices. "
    },

    {
        topic: "Acids & Bases",
        question: "Which of the following is the strongest acid?",
        choices: ["Cl-CH<sub>2</sub>-COOH", "F-CH<sub>2</sub>-COOH", "F-CH<sub>2</sub>CH<sub>2</sub>-COOH", "CH<sub>3</sub>-COOH"],
        correct: 2,
        note: "The strongest acid has the most stable conjugate base. The negative charge of the conjugate base can be stabilized via induction from a nearby electronegative atom. Higher electronegativity and closer proximity result in higher stabilization, therefore F-CH<sub>2</sub>-COOH is the strongest acid."
    },

    {
        topic: "Stereochemistry",
        question: "How would you classify <em>(2S,3R)</em>-2-bromo-3-chlorobutane and <em>(2S,3S)</em>-2-bromo-3-chlorobutane?",
        choices: ["enantiomers", "diastereomers", "meso compound", "constitutional isomers"],
        correct: 2,
        randomize: false,
        note: "Enantiomers must differ at -every- stereocenter; thus, these are diastereomers."
    },

    {
        topic: "Stereochemistry",
        question: "How would you classify <em>(2S,3R)</em>-2-bromo-3-chlorobutane and <em>(2R,3S)</em>-2-bromo-3-chlorobutane?",
        choices: ["enantiomers", "diastereomers", "meso compound", "constitutional isomers"],
        correct: 1,
        randomize: false,
        note: "These are enantiomers, since they differ at every stereocenter."
    },

    {
        topic: "Stereochemistry",
        question: "How would you classify <em>(2R,3S)</em>-butanediol and <em>(2S,3R)</em>-butanediol?",
        choices: ["enantiomers", "diastereomers", "meso compound", "constitutional isomers"],
        correct: 3,
        randomize: false,
        note: "2,3-butanediol has a mirror plane. When the (R) stereocenter on one side of a mirror plane is balanced by an (S) stereocenter on the other, the compound is meso."
    },

    {
        topic: "Stereochemistry",
        question: "How would you classify <em>(2R,3R)</em>-butanediol and <em>(2R,3S)</em>-butanediol?",
        choices: ["enantiomers", "diastereomers", "meso compound", "constitutional isomers"],
        correct: 2,
        randomize: false,
        note: "Enantiomers must differ at -every- stereocenter; thus, these are diastereomers."
    },

    {
        topic: "Stereochemistry",
        question: "How many possible stereoisomers are there for 3-bromo-2-butanol?",
        choices: ["1", "2", "4", "8"],
        correct: 3,
        randomize: false,
        note: "The number of possible stereoisomers is given by the formula 2<sup>n</sup>, where n is the number of stereocenters. The compound has 2 stereocenters, thus 4 possible stereoisomers."
    },

    {
        topic: "Alkanes",
        question: "Which of the following is NOT a possible compound for the formula C<sub>5</sub>H<sub>8</sub>?",
        choices: ["1-pentyne", "2-pentyne", "methylcyclobutane", "cyclopentene"],
        correct: 3,
        note: "There are two degrees of unsaturation, so any compound with this formula must have two rings and/or pi-bonds. The pentynes each have two pi-bonds, cyclopentene has 1 ring and 1 pi-bond, but methylcyclobutane only has 1 ring and no pi-bonds."
    },

    {
        topic: "Alkanes",
        question: "Which compound has the greatest degree of unsaturation?",
        choices: ["2-cyclopropyl-3-hexyne", "3-methylcyclohexene", "2,3-dicyclopropylbutane", "1-ethylcyclopentene"],
        correct: 1,
        note: "Each ring and/or pi-bond accounts for one degree of unsaturation. The cyclopropylhexyne has 2 pi-bonds and 1 ring; the cyclohexene and cyclopentene each have 1 pi-bond and 1 ring; the dicyclopropylbutane has no pi-bonds and 2 rings."
    },

    {
        topic: "Spectroscopy",
        question: "The compound 2-chloropropane should produce which of the following <sup>1</sup>H NMR patterns?",
        choices: ["One signal: 7H singlet", "Two signals: 6H doublet, 1H septet", "Two signals: 6H triplet, 1H doublet", "Three signals: 3H triplet, 3H triplet, 1H singlet"],
        correct: 2,
        note: "There are two sets of protons here, so two signals would be expected. C1 and C3 are equivalent due to symmetry, so they form a 6H signal, which is split into a doublet by the single proton on C2. The single proton on C2 is split into a septet by the neighboring six protons on C1 and C3."
    },

    {
        topic: "Spectroscopy",
        question: "The compound methyl tert-butyl ether, (CH<sub>3</sub>)<sub>3</sub>C-O-CH<sub>3</sub>, should produce which of the following <sup>1</sup>H NMR patterns?",
        choices: ["One signal: 12H singlet", "Two signals: 3H singlet, 9H singlet", "Two signals: 3H singlet, 9H triplet", "Four signals, each a 3H singlet"],
        correct: 2,
        note: "The protons on the tert-butyl group are all equivalent so they form a 9H signal, which is a singlet due to no neighboring protons on the 4&deg; tert-butyl carbon. The O-methyl group forms another 3H singlet, since it also does not have any neighboring protons."
    },

    {
        topic: "Spectroscopy",
        question: "The compound 1-chloro-2-propanol should exhibit which of the following in its IR spectrum?",
        choices: ["A sharp, strong peak around 1700 cm<sup>-1</sup>", "A broad peak between 3500-3200 cm<sup>-1</sup>", "A closely-grouped set of peaks around 3010 cm<sup>-1</sup>", "none of these"],
        correct: 2,
        note: "A broad peak between 3500-3200 cm<sup>-1</sup> on an IR spectrum corresponds to an O-H stretch, which is characteristic of an alcohol."
    },

    {
        topic: "Spectroscopy",
        question: "The compound 2-butanone (a ketone) should exhibit which of the following in its IR spectrum?",
        choices: ["A sharp, strong peak around 1700 cm<sup>-1</sup>", "A broad peak between 3500-3200 cm<sup>-1</sup>", "A closely-grouped set of peaks around 3010 cm<sup>-1</sup>", "none of these"],
        correct: 1,
        note: "A sharp, strong peak around 1700 cm<sup>-1</sup> on an IR spectrum corresponds to a C=O stretch, which is characteristic of a carbonyl compound such as a ketone."
    },
/*
    {
        topic: "Synthesis",
        question: "Which of the following methods could be used to form a carbonyl compound (aldehyde or ketone)?",
        choices: ["alkene + O<sub>3</sub> then Me<sub>2</sub>S", "alcohol + PCC", "glycol + H<sub>5</sub>IO<sub>6</sub>", "any of these"],
        correct: 4,
        note: "Ozonolysis, glycol cleavage with periodic acid, and oxidation of alcohols are all possible ways of forming carbonyl compounds."
    },
*/
    {
        topic: "Synthesis",
        question: "In a synthesis question, if your starting material is an alkane with no other functional groups, a good bet for a first step would be:",
        choices: ["Br<sub>2</sub> with light, heat, and/or peroxides", "Br<sub>2</sub> with dark, cold, no peroxides", "Cl<sub>2</sub> with light, heat, and/or peroxides", "Mg<sup>0</sup> in ether"],
        correct: 1,
        note: "One of the very few reactions that alkanes undergo is halogenation with Br<sub>2</sub> or Cl<sub>2</sub>, under free-radical conditions (i.e., light, heat, and/or peroxides). Br<sub>2</sub> without these conditions only adds to alkenes. Free-radical halogenation using Cl<sub>2</sub> is much less selective than with Br<sub>2</sub>, so Br<sub>2</sub> is almost always a better choice. (Mg<sup>0</sup> in ether converts an alkyl halide into a Grignard reagent, but we don't have an alkyl halide yet.)"
    },

    {
        topic: "Synthesis",
        question: "Which of the following reactions would NOT form an alkene?",
        choices: ["tBuOK + heat on a 2&deg; alkyl halide", "NaNH<sub>2</sub> on an alkyne", "H<sub>2</sub> + Lindlar Pd on an alkyne", "H<sub>2</sub>SO<sub>4</sub> + heat on a 2&deg; alcohol"],
        correct: 2,
        note: "Don't confuse NaNH<sub>2</sub> with Na + NH<sub>3</sub>. NaNH<sub>2</sub> is a very strong base, used for deprotonating 1-alkynes; Na + NH<sub>3</sub> is used to reduce an alkyne to a trans-alkene."
    },

    {
        topic: "Synthesis",
        question: "Which of the following methods could NOT be used to synthesize an alkene?",
        choices: ["NaOMe + heat on a 3&deg; alkyl halide", "Na + NH<sub>3</sub> on an alkyne", "H<sub>2</sub> + Pt on an alkyne", "H<sub>3</sub>PO<sub>4</sub> + heat on a 3&deg; alcohol"],
        correct: 3,
        note: "H<sub>2</sub> + Pt on an alkyne would reduce it all the way to an alkane -- use H<sub>2</sub> + Lindlar Pd instead to ensure the reduction stops at the alkene."
    },

    {
        topic: "Synthesis",
        question: "Which of the following reactions would NOT form an alkene?",
        choices: ["tBuOK + heat on chloromethane", "tBuOK + heat on chloroethane", "Na + NH<sub>3</sub> on an alkyne", "H<sub>2</sub> + Lindlar Pd on an alkyne"],
        correct: 1,
        note: "Read carefully, think carefully. Chloro<u>methane</u> is a <u>methyl</u> halide, which has no beta-hydrogens and therefore cannot eliminate in an E2 reaction."
    },

    {
        topic: "Synthesis",
        question: "Converting an alcohol into an alkane can be done by first converting the alcohol into a(n) _________.",
        choices: ["alkene", "alkyl halide", "alkyne", "halohydrin"],
        correct: 1,
        note: "Of the choices, only alkene and alkyne undergo reactions to form an alkane. Of these two, only an alkene can be prepared directly from an alcohol (via dehydration)."
    },

    {
        topic: "Synthesis",
        question: "Converting an alkane into an alcohol can be done by first converting the alkane into a(n) _________.",
        choices: ["alkene", "alkyl halide", "alkyne", "epoxide"],
        correct: 2,
        note: "Alkanes only undergo one useful reaction: free-radical halogenation to form an alkyl halide. This can then be converted into an alcohol via an SN2 or SN1 reaction."
    },

    {
        topic: "Synthesis",
        question: "A 1&deg; alkyl halide can be converted into an aldehyde by first converting the alkyl halide into a(n) _________.",
        choices: ["ketone", "alkene", "epoxide", "alkane"],
        correct: 2,
        note: "Of the given choices, only alkenes will react to form aldehydes (via ozonolysis)."
    },
/*
    {
        topic: "Synthesis",
        question: "A 3&deg; alkyl halide can be converted into a ketone via a(n) _________________ intermediate.",
        choices: ["alcohol", "alkyne", "alkane", "alkene"],
        correct: 4,
        note: "Be careful here -- 3&deg; alcohols cannot be oxidized to form ketones! E2 of a 3&deg; alkyl halide can form an alkene, which can undergo ozonolysis to form carbonyl compounds such as ketones."
    },
*/
    {
        topic: "Synthesis",
        question: "An alkyl halide can be converted into an epoxide by first converting the alkyl halide into a(n) _________.",
        choices: ["alcohol", "alkyne", "ether", "alkene"],
        correct: 4,
        note: "Epoxidation is generally done from alkenes. (Another method is SN2-like ring-closing of a halohydrin.)"
    }
/*
    {
        topic: "Synthesis",
        question: "Which of the following methods would NOT work well to lengthen a carbon chain?",
        choices: ["Using a Grignard reagent to ring-open an epoxide", "Using a Grignard reagent in an SN2 on an alkyl halide", "Using an acetylide anion in an SN2 on an alkyl halide", "Using a Gilman reagent in an SN2 on an alkyl halide"],
        correct: 2,
        note: "All of the above reagents act as carbon nucleophiles: Grignard reagents are R-MgBr (or R-MgCl); Gilman reagents are R<sub>2</sub>CuLi. Grignard reagents can be used to ring-open epoxides, but unlike acetylides and Gilman reagents, they do not participate in SN2 reactions on alkyl halides."
    }
*/
];
