---
tag: AFX0GT1T7X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1950 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h229215
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=41402
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238055
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/1950
    source: hf-ai-mo-aops
    label: 1950 Miklós Schweitzer
---
Show that there exists a positive constant $ c$ with the following property: To every positive irrational $ \alpha$ , there can be found infinitely many fractions $ \frac{p}{q}$ with $ (p,q)=1$ satisfying
$ \left|\alpha-\frac{p}{q}\right|\le \frac{c}{q^2}$
