---
tag: 6JA7MRQAZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179163
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$g(x)=\left\{\begin{array}{l}x \cdot f(x), x \geq 0 \\ -x \cdot f(x), x<0\end{array}\right.$

$G_{d}^{`}(0)=\lim _{\substack{x \rightarrow 0 \\ x>0}} \frac{x F(x)-H(x)+c+H(0+c)}{x-0}=\lim _{\substack{x \rightarrow 0 \\ x>0}}\left(F(x)-\frac{H(x)-H(0)}{x}\right)=F(0)-H^{`}(0)=F(0)-F(0)=0$

$G_{s}^{`}(0)=\lim _{\substack{x \rightarrow 0 \\ x<0}} \frac{-x F(x)+H(x)+c-2 H(0)+H(0)-c}{x-0}=\lim _{\substack{x \rightarrow 0 \\ x<0}}\left(-F(x)+\frac{H(x)-H(0)}{x}\right)=-F(0)+H^{`}(0)=-F(0)+F(0)=0$

$\Rightarrow G$ is differentiable at $x_{0}=0$ and $G^{`}(0)=g(0)=0$. In conclusion, $G$ is a primitive for $g$, so the function $g$ admits primitives.
