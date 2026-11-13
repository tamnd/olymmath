---
tag: F9EXBSX02J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1997 Greece National Olympiad
    url: https://artofproblemsolving.com/community/c6h446956
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=40525
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237399
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: gr-hms/1997
    source: hf-ai-mo-aops
    label: 1997 Greece National Olympiad
---
Let a function $f : \Bbb{R}^+ \to \Bbb{R}$ satisfy:
(i) $f$ is strictly increasing,
(ii) $f(x) > -1/x$ for all $x > 0$ ,
(iii) $ f(x)f (f(x) + 1/x) = 1$ for all $x > 0$ .
Determine $f(1)$ .
