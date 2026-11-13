---
tag: AS0AY22NYM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 AMC 10
    url: https://artofproblemsolving.com/community/c6h3438165
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64828
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0009.parquet#row=192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2024 AMC 10
  - at: amc10
    source: hf-mathnet
    label: United States AMC 10 A
---
Let $S$ be a subset of $\{1, 2, 3, \dots, 2024\}$ such that the following two conditions hold:
- If $x$ and $y$ are distinct elements of $S$ , then $|x-y| > 2$ - If $x$ and $y$ are distinct odd elements of $S$ , then $|x-y| > 6$ .
What is the maximum possible number of elements in $S$ ? $
\textbf{(A) }436 \textbf{(B) }506 \textbf{(C) }608 \textbf{(D) }654 \textbf{(E) }675 $
