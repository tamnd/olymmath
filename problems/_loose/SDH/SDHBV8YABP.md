---
tag: SDHBV8YABP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1734502
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16860
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218499
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $\omega$ be a circle centered at $O$ with radius $R=2018$ . For any $0 < r < 1009$ , let $\gamma$ be a circle of radius $r$ centered at a point $I$ satisfying $OI =\sqrt{R(R-2r)}$ . Choose any $A,B,C\in \omega$ with $AC, AB$ tangent to $\gamma$ at $E,F$ , respectively. Suppose a circle of radius $r_A$ is tangent to $AB,AC$ , and internally tangent to $\omega$ at a point $D$ with $r_A=5r$ . Let line $EF$ meet $\omega$ at $P_1,Q_1$ . Suppose $P_2,P_3,Q_2,Q_3$ lie on $\omega$ such that $P_1P_2,P_1P_3,Q_1Q_2,Q_1Q_3$ are tangent to $\gamma$ . Let $P_2P_3,Q_2Q_3$ meet at $K$ , and suppose $KI$ meets $AD$ at a point $X$ . Then as $r$ varies from $0$ to $1009$ , the maximum possible value of $OX$ can be expressed in the form $\frac{a\sqrt{b}}{c}$ , where $a,b,c$ are positive integers such that $b$ is not divisible by the square of any prime and $\gcd (a,c)=1$ . Compute $10a+b+c$ .

*Proposed by Vincent Huang
