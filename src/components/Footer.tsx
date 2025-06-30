import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="w-full">
        <div className="flex flex-col gap-4 md:gap-8 items-center justify-center font-bold">

          <div className="flex flex-row gap-4 items-center">
            <Link
              href="/privacy-policy"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-muted">•</span>
            <Link
              href="/terms-of-service"
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <div className="flex text-center">
            <p className="text-foreground">
            &copy;Jax Labs {new Date().getFullYear()}. All rights reserved.
            </p></div>
        </div>
      </div>
    </footer>
  );
}
