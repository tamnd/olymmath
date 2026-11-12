---
tag: ZTRZE0J9RW
kind: problem
type: answer
answer: \frac{65}{324}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2469
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The number of correct answers by Sasha is distributed according to the binomial law with a success probability of $1 / 2$

$$
P_{1}(k)=C_{5}^{k}\left(\frac{1}{2}\right)^{k}\left(\frac{1}{2}\right)^{5-k}=\frac{C_{5}^{k}}{32}
$$

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

| $P_{1}(k)$ | $1 / 32$ | $5 / 32$ | $10 / 32$ | $10 / 32$ | $5 / 32$ | $1 / 32$ |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |

The number of correct answers by Masha is distributed according to the binomial law with a success probability of $2 / 3$

$$
P_{2}(k)=C_{5}^{k}\left(\frac{2}{3}\right)^{k}\left(\frac{1}{3}\right)^{5-k}=\frac{2^{k} C_{5}^{k}}{243}
$$

| $k$ | 0 | 1 | 2 | 3 | 4 | 5 |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $P_{2}(k)$ | $1 / 243$ | $10 / 243$ | $40 / 243$ | $80 / 243$ | $80 / 243$ | $32 / 243$ |

The joint probability distribution is determined by the product of the one-dimensional distributions

$$
P(k, m)=P_{1}(k) P_{2}(m)
$$

The problem requires determining the probability of the union of events corresponding to the values $k=0, m=2 ; k=1, m=3 ; k=2, m=4$ and $k=3, m=5$. The desired probability is

$$
\begin{gathered}
p=P(0,2)+P(1,3)+P(2,4)+P(3,5)= \\
=\frac{1}{32} \cdot \frac{40}{243}+\frac{5}{32} \cdot \frac{80}{243}+\frac{10}{32} \cdot \frac{80}{243}+\frac{10}{32} \cdot \frac{32}{243}= \\
=\frac{40+400+800+320}{32 \cdot 243}=\frac{1560}{32 \cdot 243}=\frac{3 \cdot 8 \cdot 65}{4 \cdot 8 \cdot 3 \cdot 81}=\frac{65}{324} .
\end{gathered}
$$
