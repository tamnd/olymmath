---
tag: XMF4NVVPZX
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95050
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the set
$$
M=\{1,2, \cdots, 2020\} \text {. }
$$

Now, each number in $M$ is colored one of three colors: red, yellow, or blue, and each color is used at least once. Let
$$
\begin{aligned}
S_{1}= & \left\{(x, y, z) \in M^{3} \mid x, y, z\right. \text { are the same color, } \\
& 2020 \mid(x+y+z)\}, \\
S_{2}= & \left\{(x, y, z) \in M^{3} \mid x, y, z\right. \text { are all different colors, } \\
& 2020 \mid(x+y+z)\} .
\end{aligned}
$$

Find the minimum value of $2\left|S_{1}\right|-\left|S_{2}\right|$.
