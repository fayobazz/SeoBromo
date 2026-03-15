import React, { useRef, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const TeamCard = ({ member, index }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 8;
    const rotateY = ((x - centerX) / centerX) * -8;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05,1.05,1.05)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative isolate flex flex-col overflow-hidden rounded-2xl p-6 pt-40 w-full max-w-sm mx-auto shadow-lg transition-transform duration-300 ease-out cursor-pointer bg-white animate-fade-in-up`}
      style={{
        willChange: "transform",
        animationDelay: `${100 + index * 100}ms`
      }}
    >
      <img
        src={`http://backend.bromo.bromochemredeemed.com${member.image}`}
        alt={member.full_name}
        className="absolute inset-0 h-full w-full object-cover rounded-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 rounded-2xl"></div>
      <h3 className="z-10 mt-3 text-2xl font-bold text-white">{member.full_name}</h3>
      <p className="z-10 text-sm leading-6 text-gray-300">{member.position}</p>
      <p className="z-10 mt-2 text-sm leading-5 text-gray-200">{member.description}</p>
      <div className="z-10 mt-4 flex items-center text-white/80 hover:text-white transition-colors">
        <span className="text-sm">View profile</span>
        <FiArrowRight className="ml-1 w-4 h-4" />
      </div>
    </article>
  );
};

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const response = await fetch('http://backend.bromo.bromochemredeemed.com/team');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTeamMembers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeam();
  }, []);

  if (loading) {
    return (
      <section className="py-24 bg-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-gray-600">Loading team members...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-lg text-red-500">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden px-6 lg:px-8">
      {/* Decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#e4ac43]/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center animate-fade-in-up">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-[#e4ac43]/10 text-[#e4ac43] mb-4">
            Our Experts
          </span>
          <h2 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#e4ac43] to-gray-900 sm:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            The talented professionals behind our success
          </p>
        </div>

        {/* Team grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up animate-delay-100">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

        {/* CTA */}

      </div>
    </section>
  );
};

export default Team;