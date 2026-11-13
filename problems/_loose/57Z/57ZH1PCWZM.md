---
tag: 57ZH1PCWZM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Germany Team Selection Test
    url: https://artofproblemsolving.com/community/c6h249169
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40042
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237045
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-tst/2008
    source: hf-ai-mo-aops
    label: 2008 Germany Team Selection Test
---
For three points $ X,Y,Z$ let $ R_{XYZ}$ be the circumcircle radius of the triangle $ XYZ.$ If $ ABC$ is a triangle with incircle centre $ I$ then we have:

$$ \frac{1}{R_{ABI}} + \frac{1}{R_{BCI}} + \frac{1}{R_{CAI}} \leq \frac{1}{\bar{AI}} + \frac{1}{\bar{BI}} + \frac{1}{\bar{CI}}.$$
