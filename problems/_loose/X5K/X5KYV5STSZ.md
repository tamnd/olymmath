---
tag: X5KYV5STSZ
kind: problem
type: answer
answer: "55"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73830
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A quirky calculator has only the numeric keys from 0 to 9 and two special keys $A$ and $B$. When the key $A$ is pressed, the number on the display is squared; when the key $B$ is pressed, 3 is added to the number on the display. On this calculator, it is possible to obtain 22 from 1 by pressing the keys $A$ and $B$ in the order $B A B B$, as illustrated below:

$$
1 \xrightarrow{B} 4 \xrightarrow{A} 16 \xrightarrow{B} 19 \xrightarrow{B} 22
$$

a) Starting with 3 on the display, what number will appear after pressing the keys $A$ and $B$ in the order $B B A B$?
b) Show how to obtain 55 from 1 using the keys $A$ and $B$.

c) Explain why it is not possible to obtain 54 from 2 using the keys $A$ and $B$.
