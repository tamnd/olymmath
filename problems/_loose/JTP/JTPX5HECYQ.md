---
tag: JTPX5HECYQ
kind: problem
type: answer
answer: "3"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181415
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alessandro, Daniele, and Manuela are discussing a two-digit natural number $n$. Each of them makes two statements, but since they are all a bit poor at math, each of them makes one true statement and one false statement.

Alessandro says: " $n$ is even. Moreover, it is a multiple of 3.";

Daniele responds: "Yes, $n$ is a multiple of 3. Furthermore, the units digit of $n$ is 5.";

Manuela says, finally: " $n$ is a multiple of 5. The sum of its digits is 12.".

How many values can $n$ take?
(A) No such $n$ exists.
(B) 1
(C) 2
(D) 3
(E) 4
