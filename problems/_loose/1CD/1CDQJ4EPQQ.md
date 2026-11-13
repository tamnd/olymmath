---
tag: 1CDQJ4EPQQ
kind: problem
type: answer
answer: 0\xrightarrow{+1}1\xrightarrow{-i}-1\xrightarrow{+1}0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We can form sequences from an initial number using two operations " $+1=$ add 1 " and " $-i=$ minus the inverse". For example, starting with the number 3, we can form several sequences, see one of them:

$$
3 \xrightarrow{+1} 4 \xrightarrow{+1} 5 \xrightarrow{-i}-\frac{1}{5} \xrightarrow{+1} \frac{4}{5} \xrightarrow{-i}-\frac{5}{4} \xrightarrow{+1}-\frac{1}{4} \xrightarrow{+1} \frac{3}{4} \xrightarrow{-i}-\frac{4}{3} .
$$

Starting with 0, with which sequence will we obtain 0 again, using only the two operations " +1 " and " $-i$ "?
