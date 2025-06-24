
export default function Footer() {
  return (
    <footer className="bg-primary text-white py-3 px-4">
      {/* Bottom Text */}
      <div className=" text-center flex justify-center md:text-center text-sm mt-4 text-gray-200 mb-4">
        © {new Date().getFullYear()} Kavita Sri G. All rights reserved.
      </div>
    </footer>
  );
}
