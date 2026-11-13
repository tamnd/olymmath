---
tag: G91BRY0Z7D
kind: problem
type: answer
answer: All integers m with 2n <= m <= 2n^2 + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan
    source: hf-mathnet
    label: Balkan Mathematical Olympiad 41st Balkan Mathematical Olympiad
---
Let $n \ge 2$ and $S = \{1, 2, \dots, n^2\}$. For any function $f : S \to S$ let $\text{Fix}(f) = \{x \in S \mid f(x) = x\}$. Find the possible values of the expression
$$
|\text{Fix}(f)| + |\text{Im}(f)| + \max_{k \in S} |f^{-1}(k)|
$$
as $f$ ranges over all functions $f : S \to S$.
