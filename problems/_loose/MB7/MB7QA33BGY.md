---
tag: MB7QA33BGY
kind: problem
type: answer
answer: f(n)=n^2-an+2a,\\(n)=(n)=n^2-an+,\\\in{0,1,2,3,4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113908
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$S$ is the set of all non-negative integers. Find all functions $f: S \rightarrow S$, $g: S \rightarrow S, h: S \rightarrow S$ that satisfy the following two conditions:
(1) For any $m, n \in S, f(m+n)=g(m)+h(n)+2 m n$.
(2) $g(1)=h(1)=1$.
