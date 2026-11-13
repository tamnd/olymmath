---
tag: TKXFMPQT06
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161480
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function odraz map the digits $0,1,2,5,8$ to the digits $0,1,5,2,8$, respectively. A natural number $n=\overline{t_{k} t_{k-1} \cdots t_{1} t_{0}}$ is called reflectable if all its digits are from the set $\{0,1,2,5,8\}$ and $t_{0} \neq 0$, and we define

$$
\operatorname{odraz}(n)=\overline{\operatorname{odraz}\left(t_{0}\right) \operatorname{odraz}\left(t_{1}\right) \cdots \operatorname{odraz}\left(t_{k-1}\right) \operatorname{odraz}\left(t_{k}\right)}
$$

(in other words, the function odraz represents the reflection in a mirror of the number on a calculator screen). Find all natural numbers $n$ with the following properties:

$1^{\circ} n$ is reflectable and $\operatorname{odraz}(n)=n$;

$2^{\circ} n^{2}$ is reflectable and $\operatorname{odraz}\left(n^{2}\right)=n^{2}$.
