---
tag: K832JPFXR2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h415646
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6576
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208699
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2011
    source: hf-ai-mo-aops
    label: 2011 India IMO Training Camp
---
Let $ABC$ be an acute-angled triangle. Let $AD,BE,CF$ be internal bisectors with $D, E, F$ on $BC, CA, AB$ respectively. Prove that
$$\frac{EF}{BC}+\frac{FD}{CA}+\frac{DE}{AB}\geq 1+\frac{r}{R}$$
