---
tag: 7PAGGEGMER
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A factory sent 5000 good-quality items to a base. The probability that an item will be damaged during transportation is 0.0002. What is the probability that 3 defective items will arrive at the base?

$\mathrm{Pe} \mathrm{sh} \mathbf{e n i e . ~ F r o m ~ t h e ~ c o n d i t i o n ~ i t ~ f o l l o w s ~ t h a t ~} n=5000, p=0.0002, \text{ and } np=5000 \cdot 0.0002=1$. According to formula (3.3.1) we have

$$
P_{5000}(3)=\frac{1^{3}}{3!} e^{-1}=\frac{1}{6 e} \approx 0.0613
$$

Example 13. A radio apparatus consists of 1000 electrical elements. The probability of failure of one element in one year of operation is 0.001 and is independent of the state of other elements. What is the probability of the failure of two elements? What is the probability of the failure of at least two elements in a year?
