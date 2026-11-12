---
tag: V6J7F5GT5F
kind: problem
type: answer
answer: \frac{n}{+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14156
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Firstly, this company has at least two people.

If at least one of them is a knight, then m liars follow him. But they cannot all be liars, because in a group of m people following a liar, there is at least one knight.

The person numbered (m+1), following any knight, is the one who follows numbered m after the first liar after this knight. The first m-1 people after the first liar after the knight are liars. Therefore, the one following numbered m must be a knight. It will be either the originally chosen knight or some other knight. In the first case, n=m+1, and there is only one knight in the company. In the second case, there are more than one knight, and the entire company is divided into groups, each containing one knight and t liars following him. The number of such groups is $\frac{n}{m+1}$.
