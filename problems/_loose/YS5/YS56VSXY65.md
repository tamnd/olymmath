---
tag: YS56VSXY65
kind: problem
type: answer
answer: "0.05"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32916
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three series of multiple coin tosses of a symmetric coin were conducted, and the numbers of coat of arms appearances were counted: 1) $n_{1}=4040$, $m_{1}=2048$, 2) $n_{2}=12000, m_{2}=6019$; 3) $n_{3}=24000, m_{3}=12012$. Find the frequency of the coat of arms appearing in each series of trials.
$\mathbf{S o l u t i o n . ~ I n ~ c o r r e s p o n d e n c e ~ w i t h ~ f o r m u l a ~ ( 1 . 4 . 1 ) ~ w e ~ f i n d : ~}$

$$
\begin{aligned}
& W_{1}=\frac{m_{1}}{n_{1}}=\frac{2048}{4040}=0.5069 \\
& W_{2}=\frac{m_{2}}{n_{2}}=\frac{6019}{12000} \approx 0.5016 \\
& W_{3}=\frac{m_{3}}{n_{3}}=\frac{12012}{24000} \approx 0.5005
\end{aligned}
$$

Remark. These examples indicate that in multiple trials, the frequency of an event is slightly different from its probability. (The probability of the coat of arms appearing when tossing a coin $p=1 / 2=0.5$, since in this case $n=2, m=1$).

Example 9. Among 300 parts manufactured on an automatic lathe, 15 did not meet the standard. Find the frequency of the appearance of non-standard parts.
