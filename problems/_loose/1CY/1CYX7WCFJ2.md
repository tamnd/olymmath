---
tag: 1CYX7WCFJ2
kind: problem
type: answer
answer: B
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
How many zeros does the number
$$
2^{35} \times 3^{52} \times 5^{23}
$$
end with? In this problem, $a^{b^c}$ is the number you get by first calculating
the power
$$
b^c = \underbrace{b \times b \times \dots \times b}_{c \text{ times } a \ b}
$$
and then raising *a* to this power.
A) 6 B) 8 C) 25 D) 243 E) 256
