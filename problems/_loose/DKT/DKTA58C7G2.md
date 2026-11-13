---
tag: DKTA58C7G2
kind: problem
type: answer
answer: S_{\max}=\frac{1}{2}n(n-1)-k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a group of $n$ people, there are $k$ individuals who each have exactly two acquaintances among the present. Among the remaining $(n-k)$ members of the group, no two know each other.

What is the maximum number of handshakes that can occur if the strangers introduce themselves to each other? (We consider the acquaintance between two people to be mutual. Each introduction involves a handshake between the two participants.)
