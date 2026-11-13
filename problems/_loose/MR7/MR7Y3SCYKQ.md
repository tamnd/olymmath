---
tag: MR7Y3SCYKQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128763
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $\mathrm{n}$, select positive integers $\mathrm{a}_{0} 、 \mathrm{a}_{1} 、 \mathrm{a}_{2} 、 \ldots$ that satisfy the following conditions:
(1) For any $i \in N, a_{i}=a_{i+n}$;
(2) For any $i \in N$, $n \nmid a_{i}$;
(3) For any $i \in N$, $a_{i} \mid a_{i+a_{i}}$.

Question: For which positive integers $n>1$, is it true that $a_{0} 、 a_{1} 、 a_{2} 、 \ldots$ are all equal only when the conditions are satisfied?
