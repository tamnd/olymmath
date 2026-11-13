---
tag: J2NBHMPT05
kind: problem
type: answer
answer: "10"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220238
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=348
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S={1,2,\ldots,100}$. Consider a partition of $S$ into $S_1,S_2,\ldots,S_n$ for some $n$, i.e. $S_i$ are nonempty, pairwise disjoint and $ S=\bigcup_{i=1}^n S_i$. Let $a_i$ be the average of elements of the set $S_i$. Define the score of this partition by
$$\dfrac{a_1+a_2+\ldots+a_n}{n}.$$

Among all $n$ and partitions of $S$, determine the minimum possible score.
