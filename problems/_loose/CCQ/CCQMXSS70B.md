---
tag: CCQMXSS70B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Rioplatense Mathematical Olympiad, Level 3
    url: https://artofproblemsolving.com/community/c6h419593
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5556
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207701
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2010
    source: hf-ai-mo-aops
    label: 2010 Rioplatense Mathematical Olympiad, Level 3
---
Find all the functions $f:\mathbb{N}\to\mathbb{R}$ that satisfy
$$ f(x+y)=f(x)+f(y) $$ for all $x,y\in\mathbb{N}$ satisfying $10^6-\frac{1}{10^6} < \frac{x}{y} < 10^6+\frac{1}{10^6}$ .

Note: $\mathbb{N}$ denotes the set of positive integers and $\mathbb{R}$ denotes the set of real numbers.
