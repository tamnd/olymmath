---
tag: 39SQCY8VMX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h1094302
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32853
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2002
    source: hf-ai-mo-aops
    label: 2002 Olympic Revenge
---
Show that if $x,y,z,w$ are positive reals, then

$$
\frac{3}{2}\sqrt{(x^2+y^2)(w^2+z^2)} + \sqrt{(x^2+w^2)(y^2+z^2) - 3xyzw} \geq (x+z)(y+w)
$$
