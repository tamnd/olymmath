---
tag: HW8HZQ1GR7
kind: problem
type: answer
answer: b=53.69,=290.69,k=0.44,y(0.6)=261.46\mathrm{dt}/\mathrm{ha},y(1.2)=274.77\mathrm{dt}/\mathrm{ha},
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185613
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
\section*{Task 1 - 011241}

In 27,000 fertilization trials with phosphorus fertilizers, the following average potato yields were observed:

$$
\begin{array}{cc}
\text { Fertilizer application in terms of P2O5 (dt/ha) } & \text { Yield (dt/ha) } \\
0.0 & 237 \\
0.3 & 251 \\
0.9 & 269
\end{array}
$$

The relationship between the fertilizer application $x$ (in dt/ha) and the yield $y$ (in dt/ha) can be approximated by the following relation:

$$
y=a-b \cdot 10^{-k x}
$$

where $a$, $b$, and $k$ are constants.

a) Calculate these constants using the values given above!

b) Calculate the yield for a fertilizer application of 0.6 dt/ha and 1.2 dt/ha!

c) Determine the percentage deviation of the calculated values from the experimentally determined values of $261 \mathrm{dt} / \mathrm{ha}$ and $275 \mathrm{dt} / \mathrm{ha}$!
