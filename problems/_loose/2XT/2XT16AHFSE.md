---
tag: 2XT16AHFSE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Taiwan TST 2015 Round 1
    url: https://artofproblemsolving.com/community/c6h1113618
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61125
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2015
    source: hf-ai-mo-aops
    label: Taiwan TST 2015 Round 1
---
Find all functions $f:\mathbb{Q}\rightarrow\mathbb{R} \setminus \{ 0 \}$ such that
$$(f(x))^2f(2y)+(f(y))^2f(2x)=2f(x)f(y)f(x+y)$$
for all $x,y\in\mathbb{Q}$
