---
tag: 6KHQSQCCS6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105720
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of real numbers $a_{1}, a_{2}, \cdots$ that satisfies for any positive integer $n$,
$$
a_{n}\left(2 S_{n}-a_{n}\right)=1 \text {, }
$$

where $S_{n}$ denotes the sum of the first $n$ terms of the sequence. Prove:
(1) For any positive integer $n$, $a_{n}<2 \sqrt{n}$;
(2) For any positive integer $n$, $a_{n} a_{n+1}<1$.
