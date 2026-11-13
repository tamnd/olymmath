---
tag: ZQKSQ9YENW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Baltic Way
    url: https://artofproblemsolving.com/community/c6h385986
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21532
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=222931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way/1998
    source: hf-ai-mo-aops
    label: 1998 Baltic Way
---
Find all functions $f$ of two variables, whose arguments $x,y$ and values $f(x,y)$ are positive integers, satisfying the following conditions (for all positive integers $x$ and $y$ ):
\begin{align*} f(x,x)& =x, f(x,y)& =f(y,x), (x+y)f(x,y)& =yf(x,x+y).\end{align*}
