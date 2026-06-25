+++
date = '2026-06-25T08:47:22+08:00'
draft = false
title = 'My First Post'
+++

# 0. 概要

众所周知，线性泛函分析的重要定理可以粗略分为两个系列，其一是由选择公理得到的 Hahn-Banach 定理及其一系列推论，另一是由 Baire 纲定理得到的一系列道理：开映射、逆算子、闭图像、共鸣一串定理（后续把共鸣定理、Steinhaus 定理等类似的东西口头上叫做共鸣一串定理，写英语证明的时候我会不予区分地写 Banach-Steinhaus 定理，由于有用AI改，有的时候可能会出现别的词，请自行区分）。

由于 Baire 纲系列定理的性质蛮好，其应用比较广泛且初次见到可能比较困难，故整理如下一系列的问题帮助初学者认识它们。

# 1. 有限维问题

如下是一些特定条件下会使得空间只能是有限维的问题。

Question 1.1

Let P be a closed subspace of C[0,1] with respect to the \infty-norm, where \|f\|_\infty:=\max\limits_{⁡x∈[0,1]}|f(x)|. Suppose that P consists of polynomials on [0,1]. Show that \dim⁡ P<\infty.

Proof

 Note that
 P=\bigcup_{k=1}^ \infty \left\{ f\in P | \deg f\le k \right\}=:\bigcup_{k=1}^\infty F_{k}Each F_k is a closed subspace of P.
 By the Baire category theorem, since P is a complete metric space (as a closed subspace of C[0,1]), there must exist an integer N such that F_N has nonempty interior in P.
 Because F_N is a subspace, having nonempty interior forces F_N = P.
 Thus \dim P \le N+1 < \infty. 

Question 1.2

Let M be a closed subspace of C[0,1] with respect to the \infty-norm, where \|f\|_\infty:=\max\limits_{⁡x∈[0,1]}|f(x)|. Suppose M\subset C^1[0,1]. Show that \dim M <\infty.

Proof

Consider the derivative operator:
 D:M\ni f\to f'\in C[0,1] We can show that D is a closed linear operator; hence, by the closed graph theorem, it is bounded. By the Arzelà-Ascoli theorem, the unit ball B:=\{f\in M: \|f\|_{\infty}\le1\} is a compact set. Consequently, by Riesz’s lemma, the dimension of M is finite.

这里提一个问题：Q1.2 是不是直接可得 Q1.1 呢？因为多项式是连续可微的。

这里再放一个神秘问题，它利用了 L^2 的特别性质，即它是一个 Hilbert 空间。

Question 1.3

Let H be a closed subspace of L^2[0,1], and H\subset C[0,1]. Show that \dim H <\infty.

Proof

H is a Hilbert space since it's a closed subspace of the Hilbert space L^2[0,1]. If H is infinite-dimensional, there exists a standard orthonormal basis  \{e_{n}\}_{n=1}^\infty for H.
 Notice that the identity operator
 I:H\ni f\to f \in C[0,1] is a closed linear operator so it is a bounded operator by the closed graph theorem. Hence there exists a constant A>0 such that \|f\|_{\infty}\le A\|f\|_{2} for all f\in H.
 For each x\in[0,1], define the evaluation functional x(f):=f(x). It is easy to see that x(f) is a bounded linear function on H because
 |x(f)|=|f(x)|\le\|f\|_{\infty}<A\|f\|_{2}.And the norm of  x(f) can not more than A.
 There exists a unique K_{x}\in H such that x(f)=\langle f,K_{x}\rangle = \displaystyle\int_{[0,1]} f(t) \cdot K_{x}(t)dt by the Riesz representation theorem.
 We can see:

\begin{align} A^2\ge\|K_{x}\|_{2}^2&=\sum_{k=1}^\infty |\langle K_{x},e_{k}\rangle|^2 =\sum_{k=1}^\infty |x(e_{k})|^2=\sum_{k=1}^\infty|e_{k}(x)|^2\\ \end{align}

Integrating this inequality over [0,1] and using the monotone convergence theorem to exchange sum and integral yields:
 A^2\ge \int_{[0,1]}\sum_{k=1}^\infty |e_{k}(x)|^2 dx=\sum_{k=1}^\infty\int_{[0,1]}|e_{k}(x)|^2dx=\inftyIt's impossible! Hence H cannot be infinite-dimensional; therefore \dim H < \infty.

# 2. 共鸣一串定理的应用

这几个问题可能算是比较经典的吧，我在一本老书上翻到的，算是比较直接的推论。

Question 2.1

Let X be a Banach space and \{x_{n}\}\subset X. Suppose \{f(x_{n})\} is bounded for every f\in X^*. Show that \{\|x_n\|\} is bounded. 

Proof

Naturally, we can consider each x_{n} as a bounded linear functional on X^*, defined by x_{n}(f)=f(x_{n}). Its operator norm equals its norm in X. Then, by the Banach-Steinhaus theorem, \{\|x_{n}\|\} is indeed bounded since the orbit \{x_n(f)\} is bounded for every f\in X^∗.

这个道理十分经典，在证明存在周期连续函数其一点处 Fourier 级数发散就是这个道理。另外还可以证明 Lagrange 插值以及 Fourier 级数逼近连续函数的时候不可能对所有连续函数都是一致逼近。

Question 2.2

Let X be a Banach space and \{f_{n}\}\subset X^*. Then the following are equivelent:
 (a)For each x\in X, \sum_{n=1}^\infty |f_{n}(x)| converges.
 (b)For each F\in X^{**}, \sum_{n=1}^\infty |F(f_{n})| converges.

Proof

The implication (b)\Rightarrow(a) is trivial. We prove (a)\Rightarrow(b).
 For each x\in X, \sum_{n=1}^\infty |f_n(x)|<\infty. Hence, for any n\in\mathbb{N} and any choice of signs \epsilon_k\in\{-1,1\},

\Bigl|\sum_{k=1}^n \epsilon_k f_k(x)\Bigr| \le \sum_{k=1}^\infty |f_k(x)| < \infty .

Thus the family of functionals \bigl\{\sum_{k=1}^n \epsilon_k f_k : n\in\mathbb{N},\ \epsilon_k=\pm1\bigr\} is pointwise bounded on X. By the Banach-Steinhaus theorem (uniform boundedness principle), it is uniformly bounded: there exists M>0 such that

\Bigl\|\sum_{k=1}^n \epsilon_k f_k\Bigr\| \le M \qquad\text{for all } n\in\mathbb{N},\ \epsilon_k\in\{-1,1\}.

Now take an arbitrary F\in X^{**}. Define s_k=1 if F(f_k)\ge0 and s_k=-1 otherwise. Then

\sum_{k=1}^n |F(f_k)| = F\Bigl(\sum_{k=1}^n s_k f_k\Bigr) \le \|F\|\,\Bigl\|\sum_{k=1}^n s_k f_k\Bigr\| \le \|F\|\,M .

The partial sums of the positive series \sum |F(f_n)| are bounded, so the series converges.
 This completes the proof.

Question 2.3

Let X be a Banach space and \{x_{n}\}\subset X. Suppose \sum_{n=1}^\infty |f(x_{n})|< \infty for every f\in X^*. Show that there exists a constant M>0 such that
 \sum_{n=1}^\infty |f(x_{n})|\le M\|f\|

这个问题的证明和 Q2.2 中用到的没什么大区别，不再赘述。

Question 2.4

Let X be a Banach space, and let A:X\to X and B:X^*\to X^* be linear operators. Suppose that:
 (Bf)(x)=f(Ax),\text{for all } x\in X,f\in X^*.Show that both A and B are bounded.

Proof

For fixed f \in X^*, there exists a corresponding constant M_f= \|Bf\| \ge 0 such that |f(Ax)| \le M_f \|x\|. We can view Ax as a functional on X^* defined by (Ax)(f) = f(Ax).  Let \mathcal{B} = \{x \in X : \|x\| \le 1\}.  Then, by the Banach-Steinhaus theorem, the family of functionals \{Ax : x \in \mathcal{B}\} is uniformly bounded, i.e., there exists a constant M such that \|Ax\| \le M for all x \in \mathcal{B}. So the operator norm of A cannot be more than M. A is bounded.
 Now we easily get the estimate:

\sup_{\|f\| \le 1} \sup_{x \in \mathcal{B}} |(Bf)(x)| = \sup_{\|f\| \le 1} \sup_{x \in \mathcal{B}} |f(Ax)| \le M.

Hence B is bounded too. The proof is complete.

相应的有下面这样一个结果，他被称为 Hellinger-Toeplitz 定理。我认为完全可以用 Q2.4 来写，不过我们还是换一种写法。

Question 2.5

Let X be a Hilbert space and A:X\to X a linear operator satisfying
 (Ax,y)=(x,Ay), \text{ for all } x,y\in X.Show that A is bounded.

Proof

By the closed graph theorem, we just need to show that A is closed.
 Let \{x_n\} be a sequence converging to x in X, and Ax_n \to y.
 Then we have:
 (y,z)= \lim_{ n \to \infty } (Ax_{n},z)=\lim_{ n \to \infty }(x_{n},Az)=(x,Az)=(Ax,z) , \text{ for all }z\in X.Let z=Ax-y, then we get (Ax-y,Ax-y)=0. The proof is complete.

上面这个证明也可以搬到 Q2.4里去，需要注意的是没有内积，先有如下这样的形式：
 \langle y,g \rangle =\lim_{ n \to \infty }  \langle Ax_{n},g \rangle = \lim_{ n \to \infty } \langle x_{n},Bg\rangle=\langle x,Bg\rangle= \langle Ax,g \rangle 再用 Hahn-Banach 定理来说：只要 y\neq Ax，就必有 g 使得 \langle Ax-y,g\rangle\ne 0，从而这不可能，进而就可以说清楚了。

# 3. Baire 纲

这里是一些比较直接地使用 Baire 纲定理的问题。

Question 3.1

Let f \in C^\infty(\mathbb{R}) such that for every x \in \mathbb{R}, there exists an integer n(x) \ge 0 with f^{(n(x))}(x) = 0. Show that f is a polynomial.

Proof

Suppose f is not a polynomial. Define

\begin{align} &F_n=\{x\in\mathbb{R}: f^{(n)}(x)=0\}, \\ &X=\{x\in\mathbb{R}: \forall\delta>0,\;\forall m\geq0,\; f^{(m)}\neq 0 \text{ on }(x-\delta,x+\delta)\}. \end{align}

Since f is not a polynomial, X\neq\varnothing.
 1.X has no isolated points. If some x\in X were isolated, there would exist \delta>0 such that X\cap(x-\delta,x+\delta)=\{x\}. Every other point in that interval has a neighbourhood where f is a polynomial; patching these pieces together forces f to be a polynomial on the whole interval, contradicting x\in X. Hence X'=X; in particular X is closed.
 2.Applying Baire’s theorem. X is closed, hence a complete metric space. By hypothesis each x\in X belongs to some F_{n(x)}, so X=\displaystyle\bigcup_{n=0}^\infty (X\cap F_n). Baire’s theorem gives a smallest integer n\geq0 such that X\cap F_n has non‑empty interior in X, i.e., we can choose an open interval (a,b) with \varnothing\neq(a,b)\cap X\subseteq F_n.
 Because X has no isolated points, every point of (a,b)\cap X is a limit point of X. From f^{(n)}=0 on (a,b)\cap X and continuity of derivatives we obtain inductively
 f^{(k)}(x)=0\qquad\forall x\in(a,b)\cap X,\;\forall k\geq n.3.Behaviour on the complementary intervals. (a,b)\setminus X is open, so it is a countable union of disjoint open intervals: (a,b)\setminus X=\bigcup_\lambda I_\lambda, I_\lambda=(a_\lambda,b_\lambda). On each I_\lambda the function f is a polynomial; let n_\lambda be the smallest integer with f^{(n_\lambda)}\equiv0 on I_\lambda. By continuity, f^{(k)}\equiv0 on \overline{I_\lambda} for all k\geq n_\lambda.
 We show n_\lambda\leq n. The case n_\lambda=0 is trivial. If n_\lambda\geq1, minimality implies f^{(n_\lambda-1)} is a non‑zero constant on I_\lambda, hence f^{(n_\lambda-1)}(a_\lambda)\neq0 and f^{(n_\lambda-1)}(b_\lambda)\neq0. Therefore n_\lambda-1<n, i.e. n_\lambda\leq n.
 4.Contradiction. On each I_\lambda we now have f^{(n)}\equiv0. Together with f^{(n)}=0 on (a,b)\cap X, this yields f^{(n)}\equiv0 on the whole interval (a,b). Hence f is a polynomial on (a,b), contradicting the fact that (a,b) contains points of X.
 Thus f must be a polynomial on \mathbb{R}. 

以上这个令人瞩目的结果是 1954 年的，而后在 1990 年推广到了多元函数的情形。由于 1954 年那篇文章是法语（好像）的标题，我懒得查具体怎么打了就不打了。1990 那篇可以查这个标题：“A pointwise condition for an infinitely differentiable function of several variables to be a polynomial.”
