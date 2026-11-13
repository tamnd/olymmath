---
tag: E0RKD6ZNTQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751564
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69830
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260766
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2014
    source: hf-ai-mo-aops
    label: 2014 BMT Spring
---
Pick a $3$ -digit number $abc$ , which contains no $0$ 's. The probability that this is a winning number is $\frac1a\cdot\frac1b\cdot\frac1c$ . However, the BMT problem writer tries to balance out the chances for the numbers in the following ways:

- For the lowest digit $n$ in the number, he rolls an $n$ -sided die for each time that the digit appears, and gives the number $0$ probability of winning if an $n$ is rolled.
- For the largest digit $m$ in the number, he rolls an $m$ -sided die once and scales the probability of winning by that die roll.

If you choose optimally, what is the probability that your number is a winning number?
