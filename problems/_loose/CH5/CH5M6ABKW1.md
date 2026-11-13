---
tag: CH5M6ABKW1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h401363
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4061
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2009
    source: hf-ai-mo-aops
    label: 2009 Romania National Olympiad
---
Let $f:\mathbb{R}\rightarrow \mathbb{R}$ a continuous function such that for any $x\in \mathbb{R}$ , the limit $\lim_{h\to 0} \left|\frac{f(x+h)-f(x)}{h}\right|$ exists and it is finite. Prove that in any real point, $f$ is differentiable or it has finite one-side derivates, of the same modul, but different signs.
