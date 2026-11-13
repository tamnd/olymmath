---
tag: RNG7RRCXFP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Turkey MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h127270
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=62451
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254288
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tr-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Turkey MO (2nd round)
---
$ABC$ be a triangle. Its incircle touches the sides $CB, AC, AB$ respectively at $N_{A},N_{B},N_{C}$ . The orthic triangle of $ABC$ is $H_{A}H_{B}H_{C}$ with $H_{A}, H_{B}, H_{C}$ are respectively on $BC, AC, AB$ . The incenter of $AH_{C}H_{B}$ is $I_{A}$ ; $I_{B}$ and $I_{C}$ were defined similarly.
Prove that the hexagon $I_{A}N_{B}I_{C}N_{A}I_{B}N_{C}$ has all sides equal.
