---
tag: BEMJTC4KMW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Alibaba Global Math Competition
    url: https://artofproblemsolving.com/community/c6h2992051
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19798
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221316
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: alibaba/2021
    source: hf-ai-mo-aops
    label: 2021 Alibaba Global Math Competition
---
When a company releases a new social media software, the marketing development of the company researches and analyses the characteristics of the customer group apart from paying attention to the active customer depending on the change of the time. We use $n(t, x)$ to express the customer density (which will be abbreviated as density). Here $t$ is the time and $x$ is the time of the customer spent on the social media software. In the instant time $t$ , for $0<x_1<x_2$ , the number of customers of spending time between $x_1$ and $x_2$ is $\int_{x_1}^{x_2}n(t,x)dx$ . We assume the density $n(t,x)$ depends on the time and the following factors:
Assumption 1. When the customer keeps using that social media software, their time spent on social media increases linearly.
Assumption 2. During the time that the customer uses the social media software, they may stop using it. We assumption the speed of stopping using it $d(x)>0$ only depends on $x$ .
Assumption 3. There are two sources of new customer.
(i) The promotion from the company: A function of time that expresses the increase of number of people in a time unit, expressed by $c(t)$ .
(ii) The promotion from previous customer: Previous customer actively promotes this social media software to their colleagues and friends actively. The speed of promoting sucessfully depends on $x$ , denoted as $b(x)$ .
Assume if in an instant time, denoted as $t=0$ , the density function is known and $n(0,x)=n_0(x)$ . We can derive. The change of time $n(t,x)$ can satisfy the equation: $\begin{cases}
\frac{\partial}{\partial t}n(t,x)+\frac{\partial}{\partial x}n(t,x)+d(x)n(t,x)=0, t\ge 0, x\ge 0

N(t):=n(t,x=0)=c(t)+\int_{0}^{\infty}b(y)n(t,y)dy
\end{cases}\,$ where $N(t)$ iis the speed of the increase of new customers. We assume $b, d \in L^\infty_-(0, \infty)$ . $b(x)$ and $d(x)$ is bounded in essence. The following, we first make a simplified assumption: $c(t)\equiv 0$ , i.e. the increase of new customer depends only on the promotion of previous customer.
(a) According to assumption 1 and 2, formally derive the PDE that $n(t, x)$ satisfies in the two simtaneous equation above. You are required to show the assumption of model and the relationship between the Maths expression. Furthermore, according to assumption 3, explain the definition and meaning of $N(t)$ in the simtaneous equation above.
(b) We want to research the relationship of the speed of the increase of the new customers $N(t)$ and the speed of promoting sucessfully $b(x)$ . Derive an equation that $N(t)$ satisfies in terms of $N(t), n_0(x), b(x), d(x)$ only and does not include $n(t, x)$ . Prove that $N(t)$ satifies the estimation $|N(t)|\le ||b||_\infty e^{||b||_\infty t}\int_{0}^{\infty}|n_0(x)|dx$ , where $||\cdot||_\infty$ is the norm of $L^\infty$ .
(c) Finally, we want to research, after sufficiently long time, what trend of number density function $n(t, x) $ \frac{d} has. As the total number of customers may keep increasing so it is not comfortable for us to research the number density function $n(t, x)$ . We should try to find a density function which is renormalized. Hence, we first assume there is one only solution $(\lambda_0,\varphi(x))$ of the following eigenvalue problem: $\begin{cases}
\varphi'(x)+(\lambda_0+d(x))\varphi(x)=0, x\ge 0

\varphi(x)>0,\varphi(0)=\int_{0}^{\infty}b(x)\varphi(x)dx=1
\end{cases} $ and its dual problem has only solution $\psi(x)$ : $\begin{cases}
-\varphi'(x)+(\lambda_0+d(x))\psi(x)=\psi(0)b(x), x\ge 0

\psi(x)>0,\int_{0}^{\infty}\psi(x)\varphi(x)dx=1
\end{cases}\,$ Prove that for any convex function $H:\mathbb{R}^+\to \mathbb{R}^+$ which satisfies $H(0)=0$ . We have $\frac{d}{dx}\int_{0}^{\infty}\psi(x)\varphi(x)H(\frac{\tilde{n}(t,x)}{\varphi(x)})dx\le 0, \forall t\ge 0$ .
Furthermore, prove that $\int_{0}^{\infty}\psi(x)n(t,x)dx=e^{\lambda_0t}\int_{0}^{\infty}\psi(x)n_0(x)dx$ To simplify the proof, the contribution of boundary terms in $\infty$ is negligible.
