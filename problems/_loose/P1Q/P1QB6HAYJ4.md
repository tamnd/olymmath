---
tag: P1QB6HAYJ4
kind: problem
type: answer
answer: a) No; b) 38
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=22
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A computer program reads the numbers displayed, identifies the selected ones and does one of the following actions:
- If $A$ is pressed, every selected number is changed to its successor;
- If $B$ is pressed, every selected number is changed to its triple.

On Andrei and Bogdan's computer screens are displayed the numbers $1$, $3$, $3^2$, $3^3$, ..., $3^{19}$.

a) Andrei will select $5$ numbers and then presses $A$, this is a type $A$ step.
Determine if there is a succession of type $A$ steps in order to obtain the sum of all displayed numbers to be equal to $2019^{2020}$.

b) Bogdan will select $5$ numbers and then presses $B$, this is a type $B$ step.
What is the minimum number of type $B$ steps needed in order to obtain all the displayed numbers to be equal?
