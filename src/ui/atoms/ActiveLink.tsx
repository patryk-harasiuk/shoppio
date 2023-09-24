"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

type Props = {
	href: string;
	children: ReactNode;
};

export const ActiveLink = ({ href, children }: Props) => {
	const pathname = usePathname();
	const isActive = pathname === href;

	return (
		<Link
			href={href}
			className={clsx(`text-blue-400 hover:text-blue-600`, isActive && `underline`)}
		>
			{children}
		</Link>
	);
};
